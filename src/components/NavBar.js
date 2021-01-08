import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';
import '../css/Nav-Bar.css';

import LocationSearchInput from './LocationSearchInput';

const NavBar = ({ getUnits, getSearchBarLocation }) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar-router-container">
                <nav>
                    <Link to="/today">
                        <li>Today</li>
                    </Link>
                    <Link to="hourly">
                        <li>Hourly</li>
                    </Link>
                    <Link to="sevenday">
                        <li>Seven Day</li>
                    </Link>
                </nav>
            </div>
            <div className="search-and-units-container">
                <ToggleSwitch getUnits={getUnits} />
                <LocationSearchInput
                    getSearchBarLocation={getSearchBarLocation}
                />
            </div>
        </div>
    );
};

export default NavBar;
