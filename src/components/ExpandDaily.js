import React from 'react';
import degreeToDirection from '../utilities/degreeToDirection';
import '../css/Expand-Daily.css';

const ExpandDaily = ({ day, displayUnits }) => {
    const {
        sunrise,
        sunset,
        clouds,
        dew_point,
        pressure,
        wind_deg,
        wind_speed,
    } = day;

    return (
        <div className="expand-daily-container">
            <div>
                Sunrise:{' '}
                {new Date(sunrise * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                })}
            </div>
            <div>
                Sunset:{' '}
                {new Date(sunset * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                })}
            </div>
            <div>Clouds: {clouds}%</div>
            <div>Dew Point: {dew_point}</div>
            <div>Pressure: {pressure}</div>
            <div>
                Wind: {degreeToDirection(wind_deg)} at {wind_speed}
                {displayUnits.speed}
            </div>
        </div>
    );
};

export default ExpandDaily;
