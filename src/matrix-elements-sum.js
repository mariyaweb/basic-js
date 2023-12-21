const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length == 1) return (+matrix.join(''));
  let trArr = [];
  let col = matrix[0].length;
  console.log(col);
  for (let i = 0; i < col; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] != 0) {
        trArr.push(matrix[k][i]);
      }
      if (matrix[k][i] == 0) {
        break;
      }
    }
  }
  return trArr.reduce((a, b) => b + a);

}

module.exports = {
  getMatrixElementsSum
};
