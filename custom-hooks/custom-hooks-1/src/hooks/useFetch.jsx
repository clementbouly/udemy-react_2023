import { useEffect, useState } from "react";

export function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await fetch(url);
                const data = await response.json();
                if (!response.ok) throw new Error(data.message);
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { loading, data, error };
}
