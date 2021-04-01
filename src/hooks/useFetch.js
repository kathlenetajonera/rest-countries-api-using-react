import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [allCountries, setAllCountries] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                
                if (response.status === 404) {
                    throw Error("Could not fetch data")
                }

                const data = await response.json()

                setAllCountries(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url])

    return [allCountries, isLoading, error]
}
 
export default useFetch;