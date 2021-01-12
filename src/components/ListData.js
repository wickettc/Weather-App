import React, { useState } from 'react';
import '../css/List-Data.css';
import ExpandData from './ExpandData';

const ListData = ({ hour, displayUnits }) => {
    const [showExpand, setShowExpand] = useState(false);

    const { dt, temp, clouds } = hour;
    const date = new Date(dt * 1000);

    return (
        <div
            onClick={() => setShowExpand(!showExpand)}
            className="list-data-container"
        >
            <div>
                {date.toLocaleString('en-US', {
                    hour: 'numeric',
                })}
            </div>
            <div>
                Temp: {temp}
                {displayUnits}
            </div>
            <div>Clouds {clouds}%</div>
            {showExpand ? (
                <div>
                    <ExpandData
                        displayUnits={displayUnits}
                        dew_point={hour.dew_point}
                        feels_like={hour.feels_like}
                        humidity={hour.humidity}
                        pressure={hour.pressure}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default ListData;
