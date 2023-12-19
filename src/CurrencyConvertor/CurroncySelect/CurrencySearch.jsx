import { useState } from "react";
import styles from "./CurrencySearch.module.css";
import iconSearch from "../../assets/icons/icons8-search-50.png";
import { coinInputAction } from "../../store/convertSlice";
import { useDispatch, useSelector } from "react-redux";
const CurrencySearch = ({ defaultCoin, allCoins, firstCoin }) => {
  // states

  const coins = useSelector((state) => state.coinInput);

  let selectedCoin = {};
  if (firstCoin) {
    selectedCoin = coins.firstCoin;
  } else {
    selectedCoin = coins.secondCoin;
  }

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchFormOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const searchInputHander = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = allCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const selectCoinHandler = (item) => {
    if (firstCoin) {
      dispatch(coinInputAction.setFirstCoin(item));
    } else {
      dispatch(coinInputAction.setSecondCoin(item));
    }
  };

  document.addEventListener("click", function (event) {
    const target = event.target.closest(".modal");
    if (!target) {
      setIsOpen(false);
    }
  });

  return (
    <div className={`${styles.container} modal`}>
      <div className={styles.search__coin} onClick={searchFormOpenHandler}>
        <img
          src={selectedCoin.iconUrl}
          className={styles.selected__image}
          alt=""
        />
        <p className={styles.selected__text}>{selectedCoin.name}</p>
        <span className={styles.selected__symbol}>({selectedCoin.symbol})</span>
      </div>
      <div
        className={`${styles.search__container} ${isOpen ? "" : styles.hidden}`}
      >
        <div className={styles.search__box}>
          <img src={iconSearch} alt="" height={20} />
          <input
            type="text"
            className={styles.search__input}
            onChange={searchInputHander}
          />
        </div>
        <ul className={styles.search__list}>
          {filteredCoins.map((coin) => {
            return (
              <li
                key={Math.random()}
                className={styles.search__item}
                onClick={() => selectCoinHandler(coin)}
              >
                <img
                  src={coin.iconUrl}
                  className={styles.selected__image}
                  alt=""
                />
                <p className={styles.selected__text}>{coin.name}</p>
                <span className={styles.selected__symbol}>({coin.symbol})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrencySearch;
