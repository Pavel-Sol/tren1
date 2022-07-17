/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { Slices } from "../../../rtk/constants";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: Slices.counter,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
