import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllCountriesContext } from "../context/AllCountriesContext";
import useObserver from "../hooks/useObserver";

const CountryCard = ({ name, flag, population, region, capital }) => {
    const numberFormat = new Intl.NumberFormat();
    const allCountries = useContext(AllCountriesContext);
    const [ countryCardRef ] = useObserver(allCountries);

    return (
        <Link to={`/country/${name}`} style={{ textDecoration: "none" }}>
            <div 
                className="country country--card" 
                ref={ countryCardRef } 
                data-country={ name }
            >
                {/* <img className="country__flag" src={ flag } alt="" /> */}

                <div className="country__details">
                    <h2 className="country__name">{ name }</h2>

                    <div className="country__detail">
                        Population:
                        <p className="country__data">{ numberFormat.format(population) }</p>
                    </div>
                    <div className="country__detail">
                        Region:
                        <p className="country__data">{ region }</p>
                    </div>
                    <div className="country__detail">
                        Capital:
                        <p className="country__data">{ capital }</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CountryCard;