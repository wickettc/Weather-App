import React from 'react';
import Map from '../components/Map';
import '../css/Today.css';

const Today = ({ city, displayUnits, weatherData }) => {
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
    } = weatherData.current;
    const { lat, lon } = weatherData;
    return (
        <div className="container">
            <div className="title-container">
                <h1>Today in {city}</h1>
                <img
                    alt={weather[0].description}
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                />
            </div>
            <div className="today-container">
                <div className="word-container">
                    <div>Clouds {clouds}%</div>
                    <div>Dew Point {Math.round(dew_point)}</div>
                    <div>
                        Feels Like {Math.round(feels_like)}
                        {displayUnits.deg}
                    </div>
                    <div>
                        Actual {Math.round(temp)}
                        {displayUnits.deg}
                    </div>
                    <div>Humidity {humidity}%</div>
                    <div>Pressure {pressure}</div>
                    <div>
                        Sunrise{' '}
                        {new Date(sunrise * 1000).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                        })}
                    </div>
                    <div>
                        Sunset{' '}
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
