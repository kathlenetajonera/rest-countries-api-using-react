import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AllCountriesContext } from "../context/AllCountriesContext";
import useFetch from "../hooks/useFetch";
import BorderCountryButton from "./BorderCountryButton";
import ErrorMessage from "./ErrorMessage";
import GridContainer from "./GridContainer";
import Loading from "./Loading";

const CountryInfo = () => {
    const history = useHistory();
    const { name } = useParams();
    const allCountries = useContext(AllCountriesContext);
    const { data: matchedCountry, isLoading, error } = useFetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        setBorderCountries([])

        if (matchedCountry && allCountries) {
            matchedCountry[0].borders.forEach(border => {
                allCountries.forEach(country => {
                    if (border === country.alpha3Code) {
                        setBorderCountries(prev => prev.concat(country.name))
                    }
                })
            })
        }

    }, [allCountries, matchedCountry])

    return (
        <div className="container">
            <button 
                className="button button--back"
                onClick={() => history.goBack()}
            >
                Back
            </button>

            { isLoading && <Loading /> }
            { error && <ErrorMessage errMsg={error} /> }

            <div className="country">
                { matchedCountry && 
                    <GridContainer type="two-col">
                        <img src={ matchedCountry[0].flag } alt="" className="country__flag"/>

                        <div className="country__information">
                            <h2 className="country__name">{ matchedCountry[0].name }</h2>

                            <div className="flex-wrapper">
                                <div className="country__details">
                                    <div className="country__detail">
                                        Native Name:
                                        <p className="country__data">{ matchedCountry[0].nativeName }</p>
                                    </div>
                                    <div className="country__detail">
                                        Population:
                                        <p className="country__data">{ matchedCountry[0].population }</p>
                                    </div>
                                    <div className="country__detail">
                                        Region:
                                        <p className="country__data">{ matchedCountry[0].region }</p>
                                    </div>
                                    
                                    { matchedCountry[0].subRegion && 
                                        <div className="country__detail">
                                            Sub Region:
                                            <p className="country__data">{ matchedCountry[0].subRegion }</p>
                                        </div> 
                                    }

                                    { matchedCountry[0].capital && 
                                        <div className="country__detail">
                                            Capital:
                                            <p className="country__data">{ matchedCountry[0].capital }</p>
                                        </div>
                                    }
                                </div>

                                <div className="country__details">
                                    <div className="country__detail">
                                        Top Level Domain:
                                        <p className="country__data">{ matchedCountry[0].topLevelDomain.join(", ") }</p>
                                    </div>
                                    <div className="country__detail">
                                        Currencies:
                                        <p className="country__data">{ matchedCountry[0].currencies.map(currency => currency.name).join(", ") }</p>
                                    </div>
                                    <div className="country__detail">
                                        Languages:
                                        <p className="country__data">{ matchedCountry[0].languages.map(language => language.name).join(", ") }</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-wrapper">
                                { borderCountries.length === 0 ? "" : <h3 className="country__detail country__detail--border">Border Countries:</h3> }

                                <div className="country__borders">
                                    { borderCountries && borderCountries.map(border => (
                                        <BorderCountryButton border={border} key={ border } />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GridContainer>
                }
            </div>
        </div>
    );
}
 
export default CountryInfo;