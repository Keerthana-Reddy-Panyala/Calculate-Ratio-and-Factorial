const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

module.exports = function ratioAndFactorial(num1, num2, num3) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num3),
  };
};
