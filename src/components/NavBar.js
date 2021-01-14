import React, { useState, useRef, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';
import '../css/Nav-Bar.css';
import LocationSearchInput from './LocationSearchInput';

const NavBar = ({ getUnits, getSearchBarLocation, getGeoCoords }) => {
    const [hideDropDown, setHideDropDown] = useState(true);
    const nav = useRef(null);
    const dropdown = hideDropDown ? 'dropdown' : '';

    const handleCloseNav = () => {
        setHideDropDown(true);
    };

    //handles click outside nav to close nav
    useEffect(() => {
        const handleClick = (e) => {
            if (!hideDropDown) {
                if (nav.current && !nav.current.contains(e.target)) {
                    setHideDropDown(!hideDropDown);
                }
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [hideDropDown]);

    return (
        <div ref={nav} className="nav-bar">
            <div className={`nav-bar-router-container ${dropdown}`}>
                <nav>
                    <Link onClick={() => setHideDropDown(true)} to="/">
                        <li>Today</li>
                    </Link>
                    <Link onClick={() => setHideDropDown(true)} to="/hourly">
                        <li>Hourly</li>
                    </Link>
                    <Link onClick={() => setHideDropDown(true)} to="/sevenday">
                        <li>Seven Day</li>
                    </Link>
                </nav>
            </div>
            <div className={`search-and-units-container ${dropdown}`}>
                <ToggleSwitch
                    handleCloseNav={handleCloseNav}
                    getUnits={getUnits}
                />
                <div className="search-container">
                    <LocationSearchInput
                        handleCloseNav={handleCloseNav}
                        getSearchBarLocation={getSearchBarLocation}
                    />
                    <i
                        onClick={() => {
                            getGeoCoords();
                            setHideDropDown(true);
                        }}
                        className="location-icon fas fa-search-location"
                    ></i>
                </div>
            </div>
            <i
                onClick={() => setHideDropDown(!hideDropDown)}
                id="nav-bar"
                className="fas fa-bars"
            ></i>
        </div>
    );
};

export default NavBar;
