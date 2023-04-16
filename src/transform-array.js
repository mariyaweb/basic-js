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
   if (arr.length == 0 || !arr.includes('--discard-next') || !arr.includes('--discard-prev') || !arr.includes("--double-next") || !arr.includes("--double-prev")) {
      return arr;
   }

   let count = 0;
   let arrTr = arr;
   let a = [];


   for (let i = 0; i < arr.length; i++) {
      if (arrTr[i] !== "--discard-next" || arrTr[i] !== "--discard-prev" || arrTr[i] !== "--double-next" || arrTr[i] !== "--double-prev") {
         a.push(arrTr[i]);
      } if (arrTr[i] == "--discard-next" && arrTr[i + 1] != undefined) { //исключает след элемент из массива
         i++;
         arrTr.splice(i);
      } else if (arrTr[i] == "--discard-prev" && arrTr[i - 1] != undefined) { //исключает предыдущий элемент массива из преобразованного массива
         a.pop();
         arrTr.splice(i);
      } else if (arrTr[i] == "--double-next" && arrTr[i + 1] != undefined) { //дублирует следующий элемент массива в преобразованном массиве
         a.push(arr[i + 1]);
         arrTr.splice(i);
      } else if (arrTr[i] == "--double-prev" && arrTr[i - 1] != undefined) {//дублирует предыдущий элемент массива в преобразованном массиве
         a.push(arr[i - 1]);
         a.push(arr[i - 1]);
         arrTr.splice(i);
      }
   }


   return a;
};

module.exports = {
   transform
};
