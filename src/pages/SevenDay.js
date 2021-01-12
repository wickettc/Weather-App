import React from 'react';

const SevenDay = ({ city, displayUnits, daily }) => {
    const renderDaily = daily.map((day) => {
        console.log(day);
        console.log(new Date(day.dt * 1000));
    });

    return (
        <div>
            <div>Seven Day</div>
        </div>
    );
};

export default SevenDay;
