import React from 'react';

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
