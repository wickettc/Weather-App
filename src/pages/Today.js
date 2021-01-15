import React from 'react';
import Map from '../components/Map';
import degreeToDirection from '../utilities/degreeToDirection';
import '../css/Today.css';

const Today = ({ city, displayUnits, weatherData, pop }) => {
    const {
        clouds,
        dew_point,
        feels_like,
        humidity,
        pressure,
        sunrise,
        sunset,
        temp,
        weather,
        wind_deg,
        wind_speed,
    } = weatherData.current;
    const { lat, lon } = weatherData;
    return (
        <div className="container">
            <div className="title-container">
                <h1>Today in {city}</h1>
                <img
                    alt={weather[0].description}
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                />
            </div>
            <h2 className="title-container-2">
                {Math.round(temp)}
                {displayUnits.deg} and {weather[0].main}
            </h2>
            <div className="today-container">
                <div className="word-container">
                    <div>
                        <b>Clouds</b> {clouds}%
                    </div>
                    <div>
                        <b>Dew Point</b> {Math.round(dew_point)}
                    </div>
                    <div>
                        <b>Feels Like</b> {Math.round(feels_like)}
                        {displayUnits.deg}
                    </div>
                    <div>
                        <b>Humidity</b> {humidity}%
                    </div>
                    <div>
                        <b>Pressure</b> {(pressure * 0.02953).toFixed(2)}in
                    </div>
                    <div>
                        <i className="fas fa-tint"></i> {Math.round(pop * 100)}%
                    </div>
                    <div>
                        <i className="fas fa-wind"></i>{' '}
                        {degreeToDirection(wind_deg)} {Math.round(wind_speed)}{' '}
                        {displayUnits.speed}{' '}
                    </div>
                    <div>
                        <b>Sunrise</b>{' '}
                        {new Date(sunrise * 1000).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                        })}
                    </div>
                    <div>
                        <b>Sunset</b>{' '}
                        {new Date(sunset * 1000).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                        })}
                    </div>
                </div>
                <Map lat={lat} lon={lon} />
            </div>
        </div>
    );
};

export default Today;
