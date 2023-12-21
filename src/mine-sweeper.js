const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  let copyMatrix = matrix.slice();

  copyMatrix.forEach((item) => {
    item.unshift(false);
    item.push(false);
  })

  copyMatrix.unshift(Array(copyMatrix[0].length).fill(false));
  copyMatrix.push(Array(copyMatrix[0].length).fill(false));


  for (let k = 1; k < copyMatrix.length - 1; k++) {
    res.push([]);
    for (let i = 1; i < copyMatrix[k].length - 1; i++) {
      let count = 0;

      if ((copyMatrix[k - 1][i - 1])) {
        count++;
      }
      if (copyMatrix[k - 1][i]) {
        count++;
      }
      if (copyMatrix[k - 1][i + 1]) {
        count++;
      }
      if (copyMatrix[k][i + 1]) {
        count++;
      }
      if (copyMatrix[k + 1][i + 1]) {
        count++;
      }
      if (copyMatrix[k + 1][i]) {
        count++;
      }
      if (copyMatrix[k + 1][i - 1]) {
        count++;
      }
      if (copyMatrix[k][i - 1]) {
        count++;
      }

      res[k - 1][i - 1] = count;
    }

  }

  return res;
}

module.exports = {
  minesweeper
};
