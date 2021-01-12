import React, { useState } from 'react';
import ListData from '../components/ListData';

const Hourly = (props) => {
    const [displayDate, setDisplayDate] = useState(
        new Date(props.hourly[0].dt * 1000).toLocaleString('en-US', {
            weekday: 'long',
            day: 'numeric',
        })
    );

    const renderHourly = props.hourly.map((hour) => {
        const date = new Date(hour.dt * 1000).toLocaleString('en-US', {
            weekday: 'long',
            day: 'numeric',
        });

        if (displayDate !== date) {
            setDisplayDate(date);
        }

        return (
            <div>
                {displayDate !== date ? date : null}
                <ListData key={hour.dt} hour={hour} />
            </div>
        );
    });

    return (
        <div>
            <div>{renderHourly}</div>
        </div>
    );
};

export default Hourly;
