import flag from "../images/germany.jpeg"

const CountryInfo = () => {
    return (
        <div className="container">
            <button className="button button--back">Back</button>

            <div className="country">
                <div className="grid grid--two-col">
                    <img src={flag} alt="" className="country__flag"/>

                    <div className="country__information">
                        <h2 className="country__name">Germany</h2>

                        <div className="flex-wrapper">
                            <div className="country__details">
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                            </div>

                            <div className="country__details">
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                                <div className="country__detail">
                                    Native Name:
                                    <p className="country__data">Belgie</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-wrapper">
                            <h3 className="country__detail country__detail--border">Border Countries:</h3>

                            <div className="country__borders">
                                <button className="button">France</button>
                                <button className="button">France</button>
                                <button className="button">France</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CountryInfo;