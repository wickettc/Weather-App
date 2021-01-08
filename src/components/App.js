import React, { useCallback, useEffect, useState } from 'react';
import weatherCall from '../api/weatherCall';
import Today from './Today';
import Hourly from './Hourly';
import SevenDay from './SevenDay';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/App.css';

function App() {
    const [units, setUnits] = useState('imperial');
    const [displayUnits, setDisplayUnits] = useState('F°');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [weatherData, setWeatherData] = useState({});

    const getWeather = useCallback(async () => {
        const response = await weatherCall(lat, lon, units);
        console.log(response.data);
        setWeatherData(response.data);
    }, [lat, lon, units]);

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
        getWeather();
    }, [getWeather]);

    useEffect(() => {
        units === 'imperial' ? setDisplayUnits('F°') : setDisplayUnits('C°');
    }, [units]);

    return (
        <div className="App">
            <Router>
                <NavBar
                    getUnits={getUnits}
                    getSearchBarLocation={getSearchBarLocation}
                />
                <Switch>
                    <Route
                        exact
                        path="/today"
                        render={(props) => (
                            <Today
                                displayUnits={displayUnits}
                                lat={weatherData.lat}
                                lon={weatherData.lon}
                                clouds={weatherData.current.clouds}
                                dew_point={weatherData.current.dew_point}
                                feels_like={weatherData.current.feels_like}
                                humidity={weatherData.current.humidity}
                                pressure={weatherData.current.pressure}
                                sunrise={weatherData.current.sunrise}
                                sunset={weatherData.current.sunset}
                                temp={weatherData.current.temp}
                            />
                        )}
                    />
                    <Route exact path="/hourly" component={Hourly} />
                    <Route exact path="/sevenday" component={SevenDay} />
                </Switch>
            </Router>
            <button onClick={() => getWeather()}>Get Weather</button>
        </div>
    );
}

export default App;
