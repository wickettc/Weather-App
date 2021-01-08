import axios from 'axios';

const weatherCall = (lat, lon, units) => {
    try {
        return axios.get('https://api.openweathermap.org/data/2.5/onecall', {
            params: {
                appid: process.env.REACT_APP_OPENWEATHER_API,
                lat,
                lon,
                units,
            },
        });
    } catch (err) {
        console.error(err);
    }
};

export default weatherCall;
