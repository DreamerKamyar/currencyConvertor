import { createSlice } from "@reduxjs/toolkit";
import { rial, bitcoin } from "../CurrencyConvertor/Services/GetCoins";
import {
  addComma,
  coinsConversion,
  removeComma,
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
      console.log(action.payload);
      state.firstInput = addComma(Number(removeComma(action.payload)));
      state.secondInput = addComma(
        coinsConversion(
          state.firstCoin,
          state.secondCoin,
          Number(removeComma(action.payload))
        )
      );
    },
    setSocondInput(state, action) {
      state.secondInput = addComma(Number(removeComma(action.payload)));
      state.firstInput = addComma(
        coinsConversion(
          state.secondCoin,
          state.firstCoin,
          Number(removeComma(action.payload))
        )
      );
      // state.secondInput = action.payload;
      // state.firstInput = coinsConversion(
      //   state.secondCoin,
      //   state.firstCoin,
      //   action.payload
      // );
    },
    setFirstCoin(state, action) {
      return { ...state, firstCoin: { ...action.payload } };
    },
    setSecondCoin(state, action) {
      return { ...state, secondCoin: { ...action.payload } };
    },
    swap(state) {
      return {
        firstInput: initialState.firstInput,
        secondInput: initialState.secondInput,
        firstCoin: state.secondCoin,
        secondCoin: state.firstCoin,
      };
    },
  },
});
export const coinInputAction = coinAmountInput.actions;
export default coinAmountInput.reducer;
