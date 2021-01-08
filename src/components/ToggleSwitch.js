import React from 'react';
import '../css/toggle-switch.css';

const ToggleSwitch = ({ getUnits }) => {
    return (
        <div>
            <input
                onClick={(e) => getUnits(e)}
                className="toggle"
                type="checkbox"
                id="degree"
            />
        </div>
    );
};

export default ToggleSwitch;
