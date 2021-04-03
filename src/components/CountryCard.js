import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital }) => {
    return (
        <Link to={`/country/${name}`} style={{ textDecoration: "none" }}>
            <div className="country country--card" >
                <img className="country__flag" src={ flag } alt="" />

                <div className="country__details">
                    <h2 className="country__name">{ name }</h2>

                    <div className="country__detail">
                        Population:
                        <p className="country__data">{ population }</p>
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