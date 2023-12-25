import { configureStore } from "@reduxjs/toolkit";
import coinInputReducer from "./convertSlice";
import { cryptoApi } from "./CryptoApi";
export const store = configureStore({
  reducer: {
    coinInput: coinInputReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cryptoApi.middleware);
  },
});
