import React from 'react';
import '../css/toggle-switch.css';

const ToggleSwitch = ({ getUnits, handleCloseNav }) => {
    return (
        <input
            onClick={(e) => {
                getUnits(e);
                handleCloseNav();
            }}
            className="toggle"
            type="checkbox"
            id="degree"
        />
    );
};

export default ToggleSwitch;
