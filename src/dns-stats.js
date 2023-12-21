const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrItems = domains.map(item => item.split('.').reverse());
  let arrTransform = [];
  let res = {};

  arrItems.forEach((item) => {
    arrTransform.push(
      item.map((el, elIndex, arr) => `.${arr.slice(0, elIndex + 1).join('.')}`));
  })


  arrTransform.forEach((item) => {
    item.forEach(el => {
      if (el in res) {
        res[el]++;
      } else {
        res[el] = 1;
      }
    })
  })

  return res;
}

module.exports = {
  getDNSStats
};
