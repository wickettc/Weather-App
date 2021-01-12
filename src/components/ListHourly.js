import React, { useState } from 'react';
import '../css/List-Hourly.css';
import ExpandHourly from './ExpandHourly';

const ListHourly = ({ hour, displayUnits }) => {
    const [showExpand, setShowExpand] = useState(false);

    const { dt, temp, pop, weather } = hour;
    const date = new Date(dt * 1000);

    return (
        <div>
            <div
                onClick={() => setShowExpand(!showExpand)}
                className="list-hourly-container"
            >
                <div className="bold">
                    {date.toLocaleString('en-US', {
                        hour: 'numeric',
                    })}
                </div>
                <div>
                    {Math.round(temp)}
                    {displayUnits}
                </div>
                <div>Prec: {pop}%</div>
                <img
                    alt={weather[0].description}
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                />
            </div>
            {showExpand ? (
                <div>
                    <ExpandHourly
                        displayUnits={displayUnits}
                        dew_point={hour.dew_point}
                        feels_like={hour.feels_like}
                        humidity={hour.humidity}
                        pressure={hour.pressure}
                    />
                </div>
            ) : null}
            <hr />
        </div>
    );
};

export default ListHourly;
