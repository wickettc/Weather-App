import React, { useState } from 'react';
import ListData from './ListData';

const Hourly = (props) => {
    const [initDate, setInitDate] = useState('');

    const renderHourly = props.hourly.map((hour) => {
        const date = new Date(hour.dt * 1000).toLocaleString('en-US', {
            weekday: 'long',
            day: 'numeric',
        });
        return (
            <div>
                {if (date !== initDate)} 
                {/* start here */}
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
