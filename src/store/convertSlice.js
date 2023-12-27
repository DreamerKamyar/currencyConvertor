import { createSlice } from "@reduxjs/toolkit";
import { rial, bitcoin } from "../CurrencyConvertor/Services/GetCoins";
import {
  addCommasToNumberString,
  coinsConversion,
} from "../CurrencyConvertor/Services/Convert";
const initialState = {
  firstInput: 0,
  secondInput: 0,
  firstCoin: rial,
  secondCoin: bitcoin,
};
const coinAmountInput = createSlice({
  name: "coinAmount",
  initialState,
  reducers: {
    setFirstInput(state, action) {
      state.firstInput = action.payload;

      state.secondInput = coinsConversion(
        state.firstCoin,
        state.secondCoin,
        action.payload
      );
    },
    setSocondInput(state, action) {
      state.secondInput = action.payload;
      state.firstInput = coinsConversion(
        state.secondCoin,
        state.firstCoin,
        action.payload
      );
    },
    setFirstCoin(state, action) {
      return { ...state, firstCoin: { ...action.payload } };
    },
    setSecondCoin(state, action) {
      return { ...state, secondCoin: { ...action.payload } };
    },
  },
});
export const coinInputAction = coinAmountInput.actions;
export default coinAmountInput.reducer;
