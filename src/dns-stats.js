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
  let count = 0;
  let res = {};
  //Перебрать массив и добавить домены
  //Если такой домен уже есть в объекте, тогда его значению прибавить 1
  //Если домена нет, то добавить и счётчик 1
  console.log(arrItems);
  arrItems.forEach((item) => {
    arrTransform.push(
      item.map((el, elIndex, arr) => `.${arr.slice(0, elIndex + 1).join('.')}`));
  })
  console.log(arrTransform);

  arrTransform.forEach((item) => {
    item.forEach(el => {
      if (el in res) {
        res[el]++;
      } else {
        res[el] = 1;
      }

    })
  })
  console.log(res);
  return res;
}

module.exports = {
  getDNSStats
};
