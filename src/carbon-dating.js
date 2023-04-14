const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
   if (typeof (sampleActivity) == 'string' && ((!isNaN(sampleActivity) && String(sampleActivity).includes('.')) || !isNaN(sampleActivity)) && (0 < +sampleActivity && 15 > +sampleActivity)) {

      let year = (Math.log(MODERN_ACTIVITY / +sampleActivity)) / (Math.LN2 / HALF_LIFE_PERIOD);

      if (Math.ceil(year) == Infinity) {
         return false;
      } else {
         return Math.ceil(year);
      }




   } else {
      return false;
   }
}



module.exports = {
   dateSample
};