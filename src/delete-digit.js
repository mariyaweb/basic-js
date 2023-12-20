const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n), Number);
  let max = 0;

  for (let i = 0; i < arr.length; i++) {

    let arrNum = [];
    arr.map((item, index) => {
      if (index !== i) {
        arrNum.push(item);
      }
    })
    let num = Number(arrNum.join(''));

    if (num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
