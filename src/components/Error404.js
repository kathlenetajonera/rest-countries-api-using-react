const { Link } = require("react-router-dom")

const Error404 = () => {
    return (
        <div className="container">
            <h1 className="error">404 Page not found</h1>
            <Link to="/"><button className="button">Back to Home</button></Link>
        </div>
    );
}
 
export default Error404;