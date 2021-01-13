import React from 'react';
import '../css/Expand-Hourly.css';

const ExpandHourly = ({
    dew_point,
    feels_like,
    humidity,
    pressure,
    displayUnits,
}) => {
    return (
        <div className="expand-hourly-container">
            <div>
                Feels Like: {Math.round(feels_like)} {displayUnits}
            </div>
            <div>Dew Point: {Math.round(dew_point)}</div>
            <div>Humidity: {humidity}%</div>
            <div>Pressure: {pressure}</div>
            <div> hey world</div>
        </div>
    );
};

export default ExpandHourly;
