import { createSlice } from "@reduxjs/toolkit";

const distanceSlice = createSlice({
  name: "distance",
  initialState: {
    distance: []
  },
  reducers: {
    setValue: (state, action) => {
      state.distance = action.payload;
    },
  },
});

// export const { setValue } = distanceSlice.actions
export default distanceSlice.reducer;

