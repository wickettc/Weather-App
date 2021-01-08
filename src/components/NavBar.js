import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import '../css/Nav-Bar.css';

import LocationSearchInput from './LocationSearchInput';

const NavBar = ({ getUnits, getSearchBarLocation }) => {
    return (
        <div className="nav-bar">
            <ToggleSwitch getUnits={getUnits} />
            <LocationSearchInput getSearchBarLocation={getSearchBarLocation} />
        </div>
    );
};

export default NavBar;
