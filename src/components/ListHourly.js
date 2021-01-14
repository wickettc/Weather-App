import React, { useState } from "react";
import "../css/List-Hourly.css";
import ExpandHourly from "./ExpandHourly";

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
                <div className="hourly-time">
                    {date.toLocaleString("en-US", {
                        hour: "numeric",
                    })}
                </div>
                <div>
                    {Math.round(temp)}
                    {displayUnits.deg}
                </div>
                <div>
                    <i className="fas fa-tint"></i> {pop * 100}%
                </div>
                <div>{weather[0].main}</div>
                <img
                    alt={weather[0].description}
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                />
            </div>
            {showExpand ? (
                <div>
                    <ExpandHourly displayUnits={displayUnits} hour={hour} />
                </div>
            ) : null}
            <hr />
        </div>
    );
};

export default ListHourly;
