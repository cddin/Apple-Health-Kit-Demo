import { createSlice } from "@reduxjs/toolkit";

const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    steps:[]
  },
  reducers: {
    setValue: (state, action) => {
      state.steps = action.payload;
    },
  },
});

// export const { setValue } = stepsSlice.actions
export default stepsSlice.reducer;

