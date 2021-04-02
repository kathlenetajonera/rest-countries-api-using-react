import React from "react";
import useFetch from "../hooks/useFetch";

export const AllCountriesContext = React.createContext();

export const AllCountriesProvider = (props) => {
    const [allCountries, isLoading, error] = useFetch("https://restcountries.eu/rest/v2/all");
    
    return (
        <AllCountriesContext.Provider value={[allCountries, isLoading, error]}>
            {props.children}
        </AllCountriesContext.Provider>
    )
}