import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {                
                setIsLoading(true);
                const response = await fetch(url)
                
                if (response.status === 404) {
                    throw Error("Could not fetch data")
                }

                const data = await response.json()

                setData(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url])

    return { data, isLoading, error }
}
 
export default useFetch;