import React from 'react';
import '../css/toggle-switch.css';

const ToggleSwitch = ({ getUnits }) => {
    return (
        <input
            onClick={(e) => getUnits(e)}
            className="toggle"
            type="checkbox"
            id="degree"
        />
    );
};

export default ToggleSwitch;
