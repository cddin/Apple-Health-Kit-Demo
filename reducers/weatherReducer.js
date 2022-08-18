import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchWeatherInfo = createAsyncThunk(
  'weather/fetch',
  async (args, thunkAPI) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather?lat=" + args.lat + "&lon="  + args.lon + "&appid=" + args.key + "&units=" + args?.unit??"" + "&lang=" + args?.lang??"";
    const response = await new axios.get(URL);
    return response.data;
  }
)

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
    isLoading: false
  },
  reducers: {
    setValue: (state, action) => {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherInfo.fulfilled, (state, action) => {
      const obj = action.payload;
      state.weather = {name:obj.name, ...obj?.main, ...obj?.sys, ...obj?.weather?.[0], wind: obj?.wind?.speed};
      state.isLoading = false;
    }),
    builder.addCase(fetchWeatherInfo.pending, (state, action) => {
      state.isLoading = true;
    })
    ,
    builder.addCase(fetchWeatherInfo.rejected, (state, action) => {
      state.isLoading = false;
    })
  },
});

export const fetchWeather = fetchWeatherInfo;
export default weatherSlice.reducer;