import flag from "../images/germany.jpeg"

const CountryCard = () => {
    return (
        <div className="country country--card">
            <img className="country__flag" src={flag} alt="" />

            <div className="country__details">
                <h2 className="country__name">Germany</h2>

                <div className="country__detail">
                    Population:
                    <p className="country__data">81,770,900</p>
                </div>
                <div className="country__detail">
                    Region:
                    <p className="country__data">Europe</p>
                </div>
                <div className="country__detail">
                    Capital:
                    <p className="country__data">Berlin</p>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;