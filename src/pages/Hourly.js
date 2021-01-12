import React from 'react';
import ListData from '../components/ListData';
import '../css/Hourly.css';

const Hourly = ({ hourly, displayUnits, city }) => {
    //holder date to only display each date once
    let holderDate = '';
    const renderHourly = hourly.map((hour) => {
        const date = new Date(hour.dt * 1000).toLocaleString('en-US', {
            weekday: 'long',
            day: 'numeric',
        });

        //only display each date once
        let showDate;
        if (date !== holderDate) {
            showDate = date;
            holderDate = date;
        } else {
            showDate = false;
        }

        return (
            <div key={hour.dt}>
                {showDate ? <div className="show-date">{showDate}</div> : null}
                <ListData displayUnits={displayUnits} hour={hour} />
            </div>
        );
    });

    return (
        <div>
            <h1>The Next 48 Hours in {city}</h1>
            <div>{renderHourly}</div>
        </div>
    );
};

export default Hourly;
