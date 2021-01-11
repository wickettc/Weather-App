import React from 'react';

const ListData = (props) => {
    const { dt, temp, clouds } = props.hour;
    const date = new Date(dt * 1000);

    return (
        <div style={{ border: '1px solid black', margin: '5px' }}>
            <div>
                {date.toLocaleString('en-US', {
                    weekday: 'long',
                    hour: 'numeric',
                })}
            </div>
            <div>{temp}</div>
            <div>{clouds}</div>
        </div>
    );
};

export default ListData;
