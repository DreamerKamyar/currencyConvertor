import { useEffect, useState } from "react";
import styles from "./CurrencySearch.module.css";
import iconSearch from "../../assets/icons/icons8-search-50.png";
import { coinInputAction } from "../../store/convertSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCoinsQuery } from "../../store/CryptoApi";
import { rial } from "../Services/GetCoins";
import test from "../../assets/cryptologo/ALGO.png";
import { all } from "axios";
const CurrencySearch = ({ firstCoin }) => {
  // states
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const coins = useSelector((state) => state.coinInput);
  const { data: cryptoList } = useGetAllCoinsQuery();
  const [test, setTest] = useState([]);
  const [allCoins, setAllCoins] = useState(test);
  const [coinFullName, setCoinFullName] = useState({});
  /*

  new function code 


  */

  useEffect(() => {
    const fetchFullName = async () => {
      const response = await fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      );
      const data = await response.json();
      setCoinFullName(data);
    };
    fetchFullName();
  }, [setCoinFullName]);

  const coinArray = [];
  useEffect(() => {
    if (cryptoList?.RAW) {
      Object.keys(cryptoList.RAW)?.forEach((coin) => {
        // console.log(cryptoList.RAW[coin].USD.PRICE.toFixed(3));

        if (coinFullName[coin.toLocaleLowerCase()]) {
          const dynamicIconURL = `/src/assets/cryptologo/${coin}.png`;
          // ../../assets/cryptologo/ALGO.png
          coinArray.push({
            name: coinFullName[coin.toLocaleLowerCase()],
            price: cryptoList.RAW[coin].USD.PRICE.toFixed(3),
            iconUrl: dynamicIconURL,
            uudi: coin,
            symbol: cryptoList.RAW[coin].USD.FROMSYMBOL,
          });
        }
      });
    }
    setAllCoins(coinArray);
  }, [cryptoList, setAllCoins, coinFullName]);
  /*

  end function code 


  */

  useEffect(() => {
    const filteredCoins = allCoins?.filter((coin) => {
      return coin.name.toLowerCase().includes(search.toLowerCase());
    });
    setAllCoins(filteredCoins);
  }, [cryptoList, search]);
  let selectedCoin = {};
  if (firstCoin) {
    selectedCoin = coins.firstCoin;
  } else {
    selectedCoin = coins.secondCoin;
  }
  const dispatch = useDispatch();

  const searchFormOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const searchInputHander = (event) => {
    setSearch(event.target.value);
  };

  const selectCoinHandler = (item) => {
    setIsOpen(!isOpen);
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
          {allCoins?.map((coin) => {
            return (
              <li
                key={coin.uuid}
                className={styles.search__item}
                onClick={() => selectCoinHandler(coin)}
              >
                <img
                  src={require(coin.iconUrl)}
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
