const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrTr = arr.slice();
  let res = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (!arr.length || (!arr.includes('--discard-next') && !arr.includes('--discard-prev')
    && !arr.includes("--double-next") && !arr.includes("--double-prev"))) {
    return arr;
  }

  arrTr.forEach((item, index) => {
    if (typeof (item) === "number") {
      res.push(item);
    } else if (item === '--discard-next') {
      arrTr.splice(index, 2);
    } else if (item === '--discard-prev') {
      res.pop();
    } else if (item === '--double-next') {
      res.push(arrTr[1 + index]);
    } else if (item === '--double-prev') {
      res.push(res[res.length - 1]);
    }
  })

  return res.filter(item => typeof item === 'number');

}


module.exports = {
  transform
};
