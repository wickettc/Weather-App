import React from 'react';
import ListDaily from '../components/ListDaily';

const SevenDay = ({ city, displayUnits, daily }) => {
    const renderDaily = daily.map((day) => {
        return <ListDaily key={day.dt} day={day} displayUnits={displayUnits} />;
    });

    return (
        <div>
            <h1>The Next Week in {city}</h1>
            <div>{renderDaily}</div>
        </div>
    );
};

export default SevenDay;
