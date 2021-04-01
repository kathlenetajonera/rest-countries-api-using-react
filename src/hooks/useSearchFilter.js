import { useState, useEffect, useRef } from "react";

const useSearchFilter = (allCountries, setListToRender) => {
    const [keyword, setKeyword] = useState(null);
    const [regionFilter, setRegionFilter] = useState(null);
    const regionFilterRef = useRef(); 
    const searchInputRef = useRef();

    useEffect(() => {
        if (keyword !== null) {
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

    }, [keyword, allCountries, setListToRender])

    useEffect(() => {
        if (regionFilter !== null) {
            const filteredCountries = allCountries.filter(country => country.region.toLowerCase() === regionFilter.toLowerCase());

            setListToRender(filteredCountries);
            setKeyword(null) //resets the search bar state when filtered by region
        } else {
            regionFilterRef.current.textContent = "Filter by Region"
        }

    }, [regionFilter, allCountries, setListToRender])

    return [ setKeyword, searchInputRef, setRegionFilter, regionFilterRef ]
}
 
export default useSearchFilter;