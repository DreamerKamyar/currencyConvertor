export const coinsConversion = (firstCoin, secondCoin, userInput = 1) => {
  const result =
    (parseFloat(firstCoin.price) / parseFloat(secondCoin.price)) * userInput;

  return String(result.toFixed(7));
};

export const addComma = (inputNumber) => {
  return Number(inputNumber).toLocaleString("en-US");
};
export const removeComma = (inputString) => {
  const [firstPart, secondPart] = inputString.split(".");

  if (inputString.includes(".")) {
    return Number(firstPart.split(",").join("") + "." + secondPart);
  } else {
    return Number(firstPart.split(",").join(""));
  }
};
export const test = (inputNumber) => {
  return inputNumber.toLocaleString("en-US");
};

console.log(test(22222.32));
