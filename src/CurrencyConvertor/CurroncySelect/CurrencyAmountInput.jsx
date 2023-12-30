import styles from "./CurrencyAmountInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { coinInputAction } from "../../store/convertSlice";

const CurrencyAmountInput = ({ firstCoin }) => {
  const inputSlice = useSelector((state) => state.coinInput);

  const dispatch = useDispatch();
  const inputChangeHandler = (event) => {
    let value = event.target.value;
    if (isNaN(value.split("").at(-1))) {
      if (value.split("").at(-1) === undefined) {
        if (firstCoin) {
          dispatch(coinInputAction.setFirstInput("0"));
        } else {
          dispatch(coinInputAction.setSocondInput("0"));
        }
      } else {
        return;
      }
    } else {
      if (firstCoin) {
        dispatch(coinInputAction.setFirstInput(value));
      } else {
        dispatch(coinInputAction.setSocondInput(value));
      }
    }
  };

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
        value={firstCoin ? inputSlice.firstInput : inputSlice.secondInput}
      />
    </div>
  );
};

export default CurrencyAmountInput;
