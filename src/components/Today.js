import axios from 'axios';
import React, { useEffect } from 'react';

const Today = ({
    displayUnits,
    lat,
    lon,
    clouds,
    dew_point,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
}) => {
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get(
    //             `https://maps.googleapis.com/maps/api/geocode/json`,
    //             {
    //                 params: {
    //                     key: process.env.REACT_APP_GOOGLE_API_KEY,
    //                     latlng: `${lat},${lon}`,
    //                 },
    //             }
    //         );
    //         console.log(response);
    //     }
    //     fetchData();
    // }, [lat, lon]);

    return (
        <div>
            <h1>Today</h1>
            <div>{clouds}</div>
            <div>{dew_point}</div>
            <div>{`${feels_like} ${displayUnits}`}</div>
            <div>{humidity}</div>
            <div>{pressure}</div>
            <div>{sunrise}</div>
            <div>{sunset}</div>
            <div>{temp}</div>
        </div>
    );
};

export default Today;
