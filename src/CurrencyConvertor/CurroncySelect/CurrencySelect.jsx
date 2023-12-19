import CurrencyAmountInput from "./CurrencyAmountInput";
import CurrencySearch from "./CurrencySearch";
import styles from "./CurrencySelect.module.css";
export const CurrencySelect = ({
  defaultCoin,
  allCoins,
  setSeclectedCoin,
  firstCoin,
  coinAmount,
}) => {
  return (
    <div className={styles.container}>
      <CurrencySearch
        allCoins={allCoins}
        defaultCoin={defaultCoin}
        setSeclectedCoins={setSeclectedCoin}
        firstCoin={firstCoin}
      ></CurrencySearch>
      <CurrencyAmountInput
        firstCoin={firstCoin}
        coinAmount={coinAmount}
      ></CurrencyAmountInput>
    </div>
  );
};
