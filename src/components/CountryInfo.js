import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";
import ErrorMessage from "./ErrorMessage";
import GridContainer from "./GridContainer";
import Loading from "./Loading";

const CountryInfo = () => {
    let history = useHistory();
    const [countryToRender, borderCountries, isLoading, error] = useContext(CountryContext);

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
                { countryToRender &&
                    <GridContainer type="two-col">
                        <img src={ countryToRender.flag } alt="" className="country__flag"/>

                        <div className="country__information">
                            <h2 className="country__name">{ countryToRender.name }</h2>

                            <div className="flex-wrapper">
                                <div className="country__details">
                                    <div className="country__detail">
                                        Native Name:
                                        <p className="country__data">{ countryToRender.nativeName }</p>
                                    </div>
                                    <div className="country__detail">
                                        Population:
                                        <p className="country__data">{ countryToRender.population }</p>
                                    </div>
                                    <div className="country__detail">
                                        Region:
                                        <p className="country__data">{ countryToRender.region }</p>
                                    </div>
                                    <div className="country__detail">
                                        Sub Region:
                                        <p className="country__data">{ countryToRender.subRegion }</p>
                                    </div>
                                    <div className="country__detail">
                                        Capital:
                                        <p className="country__data">{ countryToRender.capital }</p>
                                    </div>
                                </div>

                                <div className="country__details">
                                    <div className="country__detail">
                                        Top Level Domain:
                                        <p className="country__data">{ countryToRender.topLevelDomain.join(", ") }</p>
                                    </div>
                                    <div className="country__detail">
                                        Currencies:
                                        <p className="country__data">{ countryToRender.currencies.map(currency => currency.name).join(", ") }</p>
                                    </div>
                                    <div className="country__detail">
                                        Languages:
                                        <p className="country__data">{ countryToRender.languages.map(language => language.name).join(", ") }</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-wrapper">
                                <h3 className="country__detail country__detail--border">Border Countries:</h3>

                                <div className="country__borders">
                                    { borderCountries && borderCountries.map(border => {
                                        return <button className="button" key={ border }>{ border }</button>
                                    })
                                    }
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