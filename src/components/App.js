import React, { useEffect, useState } from 'react';
import weatherCall from '../api/weatherCall';
import Today from './Today';
import Hourly from './Hourly';
import SevenDay from './SevenDay';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import _ from 'lodash';
import '../css/App.css';

function App() {
    const [units, setUnits] = useState('imperial');
    const [displayUnits, setDisplayUnits] = useState('F°');
    const [latLon, setLatLon] = useState({});
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({});

    const getSearchBarLocation = (latLng) => {
        const { lat, lng } = latLng;
        setLatLon({ latitude: lat, longitude: lng });
    };

    const getUnits = (e) => {
        !e.target.checked ? setUnits('imperial') : setUnits('metric');
    };

    useEffect(() => {
        async function fetchWeather() {
            const response = await weatherCall(
                latLon.latitude,
                latLon.longitude,
                units
            );
            console.log(response.data);
            setWeatherData(response.data);
            setLoading(false);
        }
        //skips running function on init render to prevent errors because latLon has not yet been set
        if (!_.isEmpty(latLon)) fetchWeather();
    }, [latLon, units]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (res) => {
            const { latitude, longitude } = await res.coords;
            setLatLon({ latitude, longitude });
        });
    }, []);

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
                <div className="content-container">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) =>
                                loading ? (
                                    <div className="loader"></div>
                                ) : (
                                    <Today
                                        displayUnits={displayUnits}
                                        lat={weatherData.lat}
                                        lon={weatherData.lon}
                                        clouds={weatherData.current.clouds}
                                        dew_point={
                                            weatherData.current.dew_point
                                        }
                                        feels_like={
                                            weatherData.current.feels_like
                                        }
                                        humidity={weatherData.current.humidity}
                                        pressure={weatherData.current.pressure}
                                        sunrise={weatherData.current.sunrise}
                                        sunset={weatherData.current.sunset}
                                        temp={weatherData.current.temp}
                                    />
                                )
                            }
                        />
                        <Route exact path="/hourly" component={Hourly} />
                        <Route exact path="/sevenday" component={SevenDay} />
                    </Switch>
                </div>
            </Router>
            {/* <button onClick={() => getWeather()}>Get Weather</button> */}
        </div>
    );
}

export default App;
