import { useState } from "react";
import styles from "./CurrencyAmountInput.module.css";
import { coinsConversion } from "../Services/Convert";
import { useDispatch, useSelector } from "react-redux";
import { coinInputAction } from "../../store/convertSlice";

const CurrencyAmountInput = ({ firstCoin }) => {
  const inputSlice = useSelector((state) => state.coinInput);
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    let value = parseFloat(event.target.value) || "";

    if (firstCoin) {
      console.log("test");
      dispatch(coinInputAction.setFirstInput(value));
      dispatch(
        coinInputAction.setSocondInput(
          coinsConversion(inputSlice.firstCoin, inputSlice.secondCoin, value)
        )
      );
    } else {
      console.log("here is the second input " + value);
      dispatch(coinInputAction.setSocondInput(value));
      dispatch(
        coinInputAction.setFirstInput(
          coinsConversion(inputSlice.secondCoin, inputSlice.firstCoin, value)
        )
      );
    }
  };
  return (
    <div className={styles.container}>
      <span className={styles.text}>پرداخت می کنید</span>
      <input
        type="number"
        placeholder="0"
        className={styles.input}
        onChange={inputChangeHandler}
        value={firstCoin ? inputSlice.firstInput : inputSlice.secondInput}
      />
    </div>
  );
};

export default CurrencyAmountInput;
