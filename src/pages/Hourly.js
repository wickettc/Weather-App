import React from 'react';
import ListHourly from '../components/ListHourly';
import '../css/Hourly.css';

const Hourly = ({ hourly, displayUnits, city }) => {
    //holder date to only display each date once
    let holderDate = '';
    //figure today to make showDate = today
    const today = `${new Date().toLocaleString('en-US', {
        weekday: 'long',
    })} ${new Date().toLocaleString('en-US', {
        day: 'numeric',
    })}`;
    const renderHourly = hourly.map((hour) => {
        const d = new Date(hour.dt * 1000);
        const weekday = d.toLocaleString('en-US', {
            weekday: 'long',
        });
        const day = d.toLocaleString('en-US', {
            day: 'numeric',
        });
        const date = `${weekday} ${day}`;

        //only display each date once
        let showDate;
        if (date !== holderDate) {
            showDate = date;
            holderDate = date;
            if (showDate === today) showDate = 'Today';
        } else {
            showDate = false;
        }

        return (
            <div key={hour.dt}>
                {showDate ? <div className="show-date">{showDate}</div> : null}
                <ListHourly displayUnits={displayUnits} hour={hour} />
            </div>
        );
    });

    return (
        <div className="hourly-container">
            <h1>The Next 48 Hours in {city}</h1>
            <div>{renderHourly}</div>
        </div>
    );
};

export default Hourly;
