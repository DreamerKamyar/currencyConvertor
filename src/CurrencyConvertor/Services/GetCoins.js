import rialIcon from "/src/assets/icons/rial.png";
import bitcoinIcon from "../../assets/icons/icons8-bitcoin-48.png";
import axios from "axios";
export default async function GetCoins(setAllCoins) {
  // const result = await fetch("https://coinranking1.p.rapidapi.com/coins", {
  //   headers: {
  //     "X-RapidAPI-Key": "1a5bbd4a53msh279ba85ee01bb41p1778f0jsneae1d35b7929",
  //     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //   },
  // });
  // const {
  //   data: { coins },
  // } = await result.json();
  const coins = { rial, bitcoin };
  setAllCoins(coins);
}

export const rial = {
  name: "rial",
  iconUrl: rialIcon,
  symbol: "IRR",
  price: 0.000024,
};
export const bitcoin = {
  name: "Bitcoin",
  iconUrl: bitcoinIcon,
  symbol: "BTC",
  price: 63265.65,
};
