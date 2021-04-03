import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
// import useSearchFilter from "../hooks/useSearchFilter";
import CountryCard from "./CountryCard";
import GridContainer from "./GridContainer";
import SearchFilterContainer from "./SearchFilterContainer";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const Container = ({ keyword, setKeyword, regionFilter, setRegionFilter }) => {
    const { data: allCountries, isLoading, error } = useFetch("https://restcountries.eu/rest/v2/all");
    const [listToRender, setListToRender] = useState(null);
    const regionFilterRef = useRef(); 
    const searchInputRef = useRef();
    // const [ setKeyword, searchInputRef, setRegionFilter, regionFilterRef] = useSearchFilter(allCountries, setListToRender);

    useEffect(() => {
        if (allCountries !== null && keyword === null && regionFilter === null) {
            setListToRender(allCountries);
        }
    }, [allCountries, keyword, regionFilter])

    useEffect(() => {
        if (keyword !== null && allCountries !== null) {
            const filteredCountries = [];

            allCountries.forEach(country => {
                const countryName = country.name.toLowerCase();
                const searchedCountry = keyword.toLowerCase();

                if (countryName.indexOf(searchedCountry) !== -1) {
                    filteredCountries.push(country)
                }
            });

            setListToRender(filteredCountries);
            setRegionFilter(null); //resets the region filter state when searching for a country
        } else {
            searchInputRef.current.value = "";
        }

    }, [keyword, allCountries, setListToRender, setRegionFilter, searchInputRef])

    useEffect(() => {
        if (regionFilter !== null && allCountries !== null) {
            const filteredCountries = allCountries.filter(country => country.region.toLowerCase() === regionFilter.toLowerCase());

            setListToRender(filteredCountries);
            setKeyword(null) //resets the search bar state when filtered by region
        } else {
            regionFilterRef.current.textContent = "Filter by Region"
        }

    }, [regionFilter, allCountries, setListToRender, setKeyword, regionFilterRef])

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
                        allCountries={allCountries}
                    />
                )) }
            </GridContainer>
        </div>
    );
}

export default Container;