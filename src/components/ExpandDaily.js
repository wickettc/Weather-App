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
            <div>
                Dew Point: {Math.round(dew_point)}
                {displayUnits.deg}
            </div>
            <div>Pressure: {(pressure * 0.02953).toFixed(2)}in</div>
            <div>
                <i className="fas fa-wind"></i> {degreeToDirection(wind_deg)}{' '}
                {Math.round(wind_speed)}
                {displayUnits.speed}
            </div>
        </div>
    );
};

export default ExpandDaily;
