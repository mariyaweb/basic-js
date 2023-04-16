const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

   let currNum = n.toString().split('');
   let numberLength = currNum.length;
   if (numberLength != 1) {
      numberLength = currNum.reduce((a, b) => a + b);
      return getSumOfDigits(n);
   } else if (numberLength == 1) {
      numberLength = currNum.join('');
      return numberLength;
   }
}

module.exports = {
   getSumOfDigits
};
