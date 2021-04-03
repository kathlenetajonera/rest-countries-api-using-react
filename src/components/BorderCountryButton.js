import { Link } from "react-router-dom";

const BorderCountryButton = ({ border }) => {
    return (
        <Link to={`/country/${border}`}>
            <button className="button">{ border }</button>
        </Link>
    );
}
 
export default BorderCountryButton;