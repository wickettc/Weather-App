import React from 'react';
import Map from '../components/Map';
import '../css/Today.css';

const Today = ({
    city,
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
    weather,
}) => {
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
                    <div>Dew Point {dew_point}</div>
                    <div>
                        Feels Like {feels_like} {displayUnits}
                    </div>
                    <div>
                        Actual Temp {temp} {displayUnits}
                    </div>
                    <div>Humidity {humidity}%</div>
                    <div>Pressure {pressure}</div>
                    <div>
                        Sunrise{' '}
                        {new Date(sunrise * 1000).toLocaleTimeString('en-US')}
                    </div>
                    <div>
                        Sunset{' '}
                        {new Date(sunset * 1000).toLocaleTimeString('en-US')}
                    </div>
                </div>
                <Map lat={lat} lon={lon} />
            </div>
        </div>
    );
};

export default Today;
