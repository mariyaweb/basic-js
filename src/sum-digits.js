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


   let currArr = n.toString().split('');
   let currNum = 0;
   if (currArr.length != 1) {
      for (let i = 0; i < currArr.length; i++) {
         currNum = currNum + (+currArr[i]);
      }
      return getSumOfDigits(currNum)
   } else if (currArr.length == 1) {
      currNum = currArr.join('');
   }

   return +currNum;
}

module.exports = {
   getSumOfDigits
};
