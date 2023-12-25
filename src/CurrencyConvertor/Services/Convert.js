export const coinsConversion = (firstCoin, secondCoin, userInput = 1) => {
  const result =
    (parseFloat(firstCoin.price) / parseFloat(secondCoin.price)) * userInput;

  return result.toFixed(7);
};

export const addCommasToNumberString = (inputString) => {
  let [integerPart, decimalPart] = String(inputString).split(".");

  // Add commas to the integer part
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the integer and decimal parts with the dot
  let resultString = decimalPart
    ? `${integerPart}.${decimalPart}`
    : integerPart;

  return resultString;
};
let originalString = "11222.98237";
let stringWithCommas = addCommasToNumberString(originalString);

console.log(stringWithCommas); // Output: "1,234,567.89"
