const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
   let index = email.lastIndexOf('@');
   //  console.log(index);
   let trEm = email;
   let res = trEm.slice(index + 1, email.length);
   // console.log(res);
   return res;
}

module.exports = {
   getEmailDomain
};
