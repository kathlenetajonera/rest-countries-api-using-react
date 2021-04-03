import React from "react";
import useFetch from "../hooks/useFetch";

export const AllCountriesContext = React.createContext();

export const AllCountriesProvider = (props) => {
    const { data: allCountries } = useFetch("https://restcountries.eu/rest/v2/all");

    return (
        <AllCountriesContext.Provider value={allCountries}>
            {props.children}
        </AllCountriesContext.Provider>
    )
}