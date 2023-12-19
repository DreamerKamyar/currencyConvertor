export const coinsConversion = (firstCoin, secondCoin, userInput = 1) => {
  const result =
    (parseFloat(secondCoin.price) / parseFloat(firstCoin.price)) * userInput;

  return result.toFixed(7);
};
