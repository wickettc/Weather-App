import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';
import '../css/Nav-Bar.css';
import LocationSearchInput from './LocationSearchInput';

const NavBar = ({ getUnits, getSearchBarLocation, getGeoCoords }) => {
    const [showDropDown, setShowDropDown] = useState(true);

    const dropdown = showDropDown ? 'dropdown' : '';

    return (
        <div className="nav-bar">
            <div className={`nav-bar-router-container ${dropdown}`}>
                <nav>
                    <Link to="/">
                        <li>Today</li>
                    </Link>
                    <Link to="/hourly">
                        <li>Hourly</li>
                    </Link>
                    <Link to="/sevenday">
                        <li>Seven Day</li>
                    </Link>
                </nav>
            </div>
            <div className={`search-and-units-container ${dropdown}`}>
                <ToggleSwitch getUnits={getUnits} />
                <div className="search-container">
                    <LocationSearchInput
                        getSearchBarLocation={getSearchBarLocation}
                    />
                    <i
                        onClick={() => getGeoCoords()}
                        className="location-icon fas fa-search-location"
                    ></i>
                </div>
            </div>
            <i
                onClick={() => setShowDropDown(!showDropDown)}
                id="nav-bar"
                className="fas fa-bars"
            ></i>
        </div>
    );
};

export default NavBar;
