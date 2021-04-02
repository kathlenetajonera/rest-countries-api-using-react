import React, { useContext, useEffect, useState } from "react";
import { AllCountriesContext } from "./AllCountriesContext";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const CountryContext = React.createContext();

export const CountryProvider = (props) => {
    const { name } = useParams();
    const [allCountries] = useContext(AllCountriesContext);
    const [matchedCountry, isLoading, error] = useFetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    const [countryToRender, setCountryToRender] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        if (matchedCountry !== null) {
            setCountryToRender(matchedCountry[0]);

            console.log(name);
        }
    }, [matchedCountry])

    useEffect(() => {
        setBorderCountries([])

        if (countryToRender !== null && allCountries !== null) {
            countryToRender.borders.forEach(border => {
                allCountries.forEach(country => {
                    if (border === country.alpha3Code) {
                        setBorderCountries(prev => prev.concat(country.name))
                    }
                })
            })            
        }
    }, [allCountries, countryToRender])

    return (
        <CountryContext.Provider value={[countryToRender, borderCountries, isLoading, error]}>
            {props.children}
        </CountryContext.Provider>
    )
}
