import styles from "./CurrencyConvertor.module.css";
import { CurrencySelect } from "./CurroncySelect/CurrencySelect";
import swapIcon from "../assets/icons/icons8-swap-24 (1).png";
import GetCoins, { rial, bitcoin } from "./Services/GetCoins";
import { useEffect, useRef, useState } from "react";
import { coinsConversion } from "./Services/Convert";
import { useSelector, useDispatch } from "react-redux";
import { coinInputAction } from "../store/convertSlice";
import { useGetAllCoinsQuery } from "../store/CryptoApi";
const CurrencyConvertor = () => {
  const { firstCoin, secondCoin } = useSelector((state) => state.coinInput);
  const dispatch = useDispatch();

  let convertionValue = useRef(coinsConversion(firstCoin, secondCoin));

  useEffect(() => {
    convertionValue.current = coinsConversion(firstCoin, secondCoin);
  }, [firstCoin, secondCoin]);

  const swapChangeHanler = () => {
    dispatch(coinInputAction.setFirstCoin(secondCoin));
    dispatch(coinInputAction.setSecondCoin(firstCoin));
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
          1 {firstCoin.name} = {convertionValue.current} {secondCoin.name}
        </p>
        <button className={styles.purchase}>خرید</button>
      </div>
      <div className={styles.container__background}></div>
    </>
  );
};

export default CurrencyConvertor;
