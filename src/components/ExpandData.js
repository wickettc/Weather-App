import React from 'react';
import '../css/Expand-Data.css';

const ExpandData = ({
    dew_point,
    feels_like,
    humidity,
    pressure,
    displayUnits,
}) => {
    return (
        <div className="expand-data-container">
            <div>Dew Point: {dew_point}</div>
            <div>
                Feels Like: {feels_like} {displayUnits}
            </div>
            <div>Humidity: {humidity}%</div>
            <div>Pressure: {pressure}</div>
        </div>
    );
};

export default ExpandData;
