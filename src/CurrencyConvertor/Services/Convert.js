export const coinsConversion = (firstCoin, secondCoin, userInput = 1) => {
  const result =
    (parseFloat(firstCoin.price) / parseFloat(secondCoin.price)) * userInput;

  return String(result.toFixed(7));
};

export const addCommasToNumberString = (inputString) => {
  let [integerPart, decimalPart] = String(inputString).split(".");
  console.log(typeof inputString);

  // Add commas to the integer part
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the integer and decimal parts with the dot
  let resultString = decimalPart
    ? `${integerPart}.${decimalPart}`
    : integerPart;

  return resultString;
};
