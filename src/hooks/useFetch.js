import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, method = "GET", request = null) => {
    const [data, setdata] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const response = await axios({
                    method: method.toLowerCase(),
                    url,
                    data: request,
                });
                setdata(response.data);
            } catch (err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [url, method, request]);

    return { data, isError, isLoading };
};

export default useFetch;
