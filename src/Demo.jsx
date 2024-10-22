import axios from "axios";
import { useState, useEffect } from "react";

const Demo = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://eye-care.developmentalphawizz.com/api/v1/products/latest');
                setData(res.data);
                console.log("Response data:", res.data);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>SpaceX Latest Launch</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data ? (
                <div>
                    <h2>{data.name}</h2>
                    <p>{data.details}</p>
                    <p>{data.date_utc}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Demo;
