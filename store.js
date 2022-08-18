import {configureStore} from "@reduxjs/toolkit"

import stepsReducer from './reducers/stepsReducer';
import distanceReducer from './reducers/distanceReducer';
import weatherReducer from './reducers/weatherReducer';


export const store = configureStore(
  {
    reducer: {
      steps: stepsReducer,
      distance: distanceReducer,
      weather: weatherReducer
    }
  }
);


