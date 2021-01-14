import React, { useEffect, useState } from "react";
import weatherCall from "../api/weatherCall";
import Today from "../pages/Today";
import Hourly from "../pages/Hourly";
import SevenDay from "../pages/SevenDay";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import _ from "lodash";
import "../css/App.css";

function App() {
    const [units, setUnits] = useState("imperial");
    const [displayUnits, setDisplayUnits] = useState({
        deg: "F°",
        speed: "MPH",
    });
    const [latLon, setLatLon] = useState({});
    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("");

    const getSearchBarLocation = (latLng) => {
        const { lat, lng } = latLng;
        setLatLon({ latitude: lat, longitude: lng });
    };

    const getUnits = (e) => {
        !e.target.checked ? setUnits("imperial") : setUnits("metric");
    };

    useEffect(() => {
        async function fetchWeather() {
            const response = await weatherCall(
                latLon.latitude,
                latLon.longitude,
                units
            );
            console.log(response);
            setCity(response[1].data.name);
            setWeatherData(response[0].data);
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
        units === "imperial"
            ? setDisplayUnits({ deg: "F°", speed: "MPH" })
            : setDisplayUnits({ deg: "°C", speed: "M/S" });
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
                                        city={city}
                                        displayUnits={displayUnits}
                                        weatherData={weatherData}
                                        pop={weatherData.daily[0].pop}
                                    />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/hourly"
                            render={(props) =>
                                loading ? (
                                    <div className="loader"></div>
                                ) : (
                                    <Hourly
                                        city={city}
                                        displayUnits={displayUnits}
                                        hourly={weatherData.hourly}
                                    />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/sevenday"
                            render={() =>
                                loading ? (
                                    <div className="loader"></div>
                                ) : (
                                    <SevenDay
                                        city={city}
                                        displayUnits={displayUnits}
                                        daily={weatherData.daily}
                                    />
                                )
                            }
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
