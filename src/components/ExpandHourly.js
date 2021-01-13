import React from 'react';
import degreeToDirection from '../utilities/degreeToDirection';
import '../css/Expand-Hourly.css';

const ExpandHourly = ({ hour, displayUnits }) => {
    const {
        dew_point,
        feels_like,
        humidity,
        pressure,
        wind_deg,
        wind_speed,
    } = hour;

    return (
        <div className="expand-hourly-container">
            <div>
                Feels Like: {Math.round(feels_like)} {displayUnits.deg}
            </div>
            <div>Dew Point: {Math.round(dew_point)}</div>
            <div>Humidity: {humidity}%</div>
            <div>Pressure: {pressure}</div>
            <div>
                Wind: {degreeToDirection(wind_deg)} at {wind_speed}
                {displayUnits.speed}
            </div>
        </div>
    );
};

export default ExpandHourly;
