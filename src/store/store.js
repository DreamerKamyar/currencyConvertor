import { configureStore } from "@reduxjs/toolkit";
import coinInputReducer from "./convertSlice";
export const store = configureStore({
  reducer: {
    coinInput: coinInputReducer,
  },
});
