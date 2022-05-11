const factorialOfNumbers = require("../factorial/index");
const rationOfNumbers = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = rationOfNumbers(num1, num2);
  const factorial = factorialOfNumbers(num3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
