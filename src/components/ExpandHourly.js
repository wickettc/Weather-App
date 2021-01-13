import React from 'react';
import degreeToDirection from '../utilities/degreeToDirection';
import '../css/Expand-Hourly.css';

const ExpandHourly = ({ hour, displayUnits }) => {
    const {
        clouds,
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
            <div>
                Dew Point: {Math.round(dew_point)}
                {displayUnits.deg}
            </div>
            <div>Humidity: {humidity}%</div>
            <div>Pressure: {(pressure * 0.02953).toFixed(2)}in</div>
            <div>Clouds: {clouds}%</div>
            <div>
                <i className="fas fa-wind"></i> {degreeToDirection(wind_deg)}{' '}
                {Math.round(wind_speed)}
                {displayUnits.speed}
            </div>
        </div>
    );
};

export default ExpandHourly;
