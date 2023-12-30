import styles from "./CurrencyConvertor.module.css";
import { CurrencySelect } from "./CurroncySelect/CurrencySelect";
import swapIcon from "../assets/icons/icons8-swap-24 (1).png";
import { rial, bitcoin } from "./Services/GetCoins";
import { useEffect, useRef, useState } from "react";
import { addComma, coinsConversion } from "./Services/Convert";
import { useSelector, useDispatch } from "react-redux";
import { coinInputAction } from "../store/convertSlice";
import { useGetAllCoinsQuery } from "../store/CryptoApi";
const CurrencyConvertor = () => {
  const { firstCoin, secondCoin } = useSelector((state) => state.coinInput);
  const dispatch = useDispatch();
  const [test, setTest] = useState(0);
  let convertionValue = useRef(coinsConversion(firstCoin, secondCoin));

  useEffect(() => {
    setTest(coinsConversion(firstCoin, secondCoin));
  }, [firstCoin, secondCoin]);
  console.log(addComma(convertionValue.current));
  const swapChangeHanler = () => {
    dispatch(coinInputAction.swap());
  };
  return (
    <>
      <div className={styles.container}>
        <CurrencySelect defaultCoin={rial} firstCoin={true}></CurrencySelect>
        <button className={styles.swap} onClick={swapChangeHanler}>
          <img src={swapIcon} alt="" />
        </button>
        <CurrencySelect
          defaultCoin={bitcoin}
          firstCoin={false}
        ></CurrencySelect>
        <div className={styles.error}>error block</div>
        <p className={styles.finalAmount}>
          1 {firstCoin.name} = {addComma(test)} {secondCoin.name}
        </p>
        <a
          href="https://ramziland.com/dashnew/newbuy.php"
          className={styles.btn}
        >
          <span className={styles.btnInner}>خرید</span>
        </a>
      </div>
      <div className={styles.container__background}></div>
    </>
  );
};

export default CurrencyConvertor;
