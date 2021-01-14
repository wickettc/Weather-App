import React, { useState } from "react";
import "../css/List-Daily.css";
import ExpandDaily from "./ExpandDaily";

const ListDaily = ({ displayUnits, day }) => {
    const [showExpand, setShowExpand] = useState(false);

    const { pop, dt, temp, weather } = day;
    let displayDate = "";
    if (
        new Date(dt * 1000).toLocaleDateString() ===
        new Date().toLocaleDateString()
    ) {
        displayDate = "Today";
    } else {
        const d = new Date(dt * 1000);
        const weekday = d.toLocaleString("en-US", { weekday: "short" });
        const day = d.toLocaleString("en-US", { day: "numeric" });
        displayDate = `${weekday} ${day}`;
    }
    return (
        <div>
            <div
                onClick={() => setShowExpand(!showExpand)}
                className="list-daily-container"
            >
                <div className="time-daily">{displayDate}</div>
                <div>
                    {Math.round(temp.max)} {displayUnits.deg}/
                    {Math.round(temp.min)} {displayUnits.deg}
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
                <ExpandDaily day={day} displayUnits={displayUnits} />
            ) : null}
            <hr />
        </div>
    );
};

export default ListDaily;
