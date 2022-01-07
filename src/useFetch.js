import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('Could not fetch the data for the resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setError(null);
                    setIsPending(false);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}

export default useFetch; 