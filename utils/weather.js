import { getLocation } from '../utils/location';
import {store} from '../store';
import { setWeather } from '../actions/weather';
import { fetchWeather } from '../reducers/weatherReducer';

const getWeatherData = () => {
    getLocation().then((location) => {
        store.dispatch(fetchWeather({
            key: "26a9c324fed0795f4f52be85b9d21e82",
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            unit: "metric"
    
        }));
});

}
module.exports = {
    getWeatherData
}