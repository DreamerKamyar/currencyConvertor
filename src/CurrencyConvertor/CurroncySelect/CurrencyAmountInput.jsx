import { useRef, useState } from "react";
import styles from "./CurrencyAmountInput.module.css";
import { addCommasToNumberString, coinsConversion } from "../Services/Convert";
import { useDispatch, useSelector } from "react-redux";
import { coinInputAction } from "../../store/convertSlice";

const CurrencyAmountInput = ({ firstCoin }) => {
  const inputSlice = useSelector((state) => state.coinInput);
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    let value = parseFloat(event.target.value) || "";
    if (firstCoin) {
      dispatch(coinInputAction.setFirstInput(value));
    } else {
      dispatch(coinInputAction.setSocondInput(value));
    }
  };
  const outpuedValue = firstCoin
    ? addCommasToNumberString(inputSlice.firstInput)
    : addCommasToNumberString(inputSlice.secondInput);
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        {firstCoin ? " : این مقدار" : " : معادل است با "}
      </span>
      <input
        type="string"
        placeholder="0"
        className={styles.input}
        onChange={inputChangeHandler}
        value={outpuedValue}
      />
    </div>
  );
};

export default CurrencyAmountInput;
