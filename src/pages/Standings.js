import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData';

const Standings = () => {

    const [standings, setStandings] = useState({})
    useEffect(() => {
        const getStandings = async () => {
            const response = await fetchData("http://localhost:5000/api/standings");
            setStandings(response);
        }
        getStandings();
    }, [])

    return (
        <div>{JSON.stringify(standings)}</div>
    )
}

export default Standings;