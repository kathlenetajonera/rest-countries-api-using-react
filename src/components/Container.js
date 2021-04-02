import { useState, useEffect, useContext } from "react";
import { AllCountriesContext } from "../context/AllCountriesContext";
import useSearchFilter from "../hooks/useSearchFilter";
import CountryCard from "./CountryCard";
import GridContainer from "./GridContainer";
import SearchFilterContainer from "./SearchFilterContainer";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const Container = () => {
    const [allCountries, isLoading, error] = useContext(AllCountriesContext)
    const [listToRender, setListToRender] = useState(null);
    const [setKeyword, searchInputRef, setRegionFilter, regionFilterRef] = useSearchFilter(allCountries, setListToRender);

    useEffect(() => {
        if (allCountries !== null) {
            setListToRender(allCountries);
        }
    }, [allCountries])

    return (
        <div className="container">
            <SearchFilterContainer 
                setKeyword={ setKeyword } 
                searchInputRef={ searchInputRef }
                setRegionFilter= { setRegionFilter }
                regionFilterRef={ regionFilterRef }
            />
            { isLoading && <Loading /> }
            { error && <ErrorMessage errMsg={error} /> }
            <GridContainer type="four-col">
                { listToRender && listToRender.map(country => (
                    <CountryCard 
                        name={country.name}
                        flag={country.flag}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        key={country.alpha3Code}
                    />
                )) }
            </GridContainer>
        </div>
    );
}

export default Container;