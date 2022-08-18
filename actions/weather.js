import { SET_WEATHER } from './types';

export const setWeather = weatherInfo => {
  return {
    type: SET_WEATHER,
    payload: weatherInfo
  }
}