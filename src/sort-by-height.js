const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

   let a = [];
   let b = arr;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] != -1) {
         a.push(arr[i]);
         b.splice(i, 1, '');
      }
      if (arr[i] == -1) {
         // 
      }
   }
   // console.log(a);

   // console.log(b); 
   a.sort((a, b) => a - b);
   // console.log(a);
   let sortArr = a;

   let k = 0;

   for (let i = 0; i < b.length; i++) {
      if (b[i] == '') {
         b.splice(i, 1, sortArr[k]);
         k++;
      }
   }
   // console.log(b);
   return b;
}

module.exports = {
   sortByHeight
};
