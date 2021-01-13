import React, { useState } from 'react';
import '../css/List-Daily.css';
import ExpandDaily from './ExpandDaily';

const ListDaily = ({ displayUnits, day }) => {
    const [showExpand, setShowExpand] = useState(false);

    const { pop, dt, temp } = day;
    let displayDate = '';
    if (
        new Date(dt * 1000).toLocaleDateString() ===
        new Date().toLocaleDateString()
    ) {
        displayDate = 'Today';
    } else {
        const d = new Date(dt * 1000);
        const weekday = d.toLocaleString('en-US', { weekday: 'short' });
        const day = d.toLocaleString('en-US', { day: 'numeric' });
        displayDate = `${weekday} ${day}`;
    }
    return (
        <div>
            <div
                onClick={() => setShowExpand(!showExpand)}
                className="list-daily-container"
            >
                <div className="bold">{displayDate}</div>
                <div>
                    {Math.round(temp.max)} {displayUnits}/{Math.round(temp.min)}{' '}
                    {displayUnits}
                </div>
                <div>
                    <i className="fas fa-tint"></i> {Math.round(pop)}%
                </div>
                <img
                    alt={day.weather[0].description}
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                />
            </div>
            {showExpand ? <ExpandDaily /> : null}
            <hr />
        </div>
    );
};

export default ListDaily;
