import axios from 'axios';

const weatherCall = (lat, lon, units) => {
    try {
        return axios
            .all([
                axios.get('https://api.openweathermap.org/data/2.5/onecall', {
                    params: {
                        appid: process.env.REACT_APP_OPENWEATHER_API,
                        lat,
                        lon,
                        units,
                    },
                }),
                axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        appid: process.env.REACT_APP_OPENWEATHER_API,
                        lat,
                        lon,
                        units,
                    },
                }),
            ])
            .then(
                axios.spread((...responses) => {
                    return responses;
                })
            );
    } catch (err) {
        console.error(err);
    }
};

export default weatherCall;
