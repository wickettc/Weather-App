import React, { useEffect, useState } from 'react';
import weatherCall from '../api/weatherCall';
import NavBar from './NavBar';

function App() {
    const [units, setUnits] = useState('imperial');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const getWeather = async () => {
        const response = await weatherCall(lat, lon, units);
        console.log(response.data);
    };

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((res) => {
            setLat(res.coords.latitude);
            setLon(res.coords.longitude);
        });
    };

    const getSearchBarLocation = (latLng) => {
        setLat(latLng.lat);
        setLon(latLng.lng);
    };

    const getUnits = (e) => {
        !e.target.checked ? setUnits('imperial') : setUnits('metric');
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <div className="App">
            <NavBar
                getUnits={getUnits}
                getSearchBarLocation={getSearchBarLocation}
            />

            <button onClick={() => getWeather()}>Get Weather</button>
            <button onClick={() => getLocation()}>Get location</button>
        </div>
    );
}

export default App;
