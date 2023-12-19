const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }


  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    };

    let messageEnc = message.toUpperCase().split('');
    let keyEnc = key.toUpperCase().split('');
    let messageArr = [];
    let keyArr = [];
    let keyIndex = 0;
    let res = [];

    messageEnc.forEach((item, index) => {
      if (this.alphabet.includes(item)) {
        messageArr.push(this.alphabet.indexOf(item));
        if (keyEnc.length - 1 <= keyIndex) {
          keyArr.push(this.alphabet.indexOf(keyEnc[keyIndex]));
          keyIndex = 0;
        } else {
          keyArr.push(this.alphabet.indexOf(keyEnc[keyIndex]));
          keyIndex = keyIndex + 1;
        }

      } else {
        messageArr.push(messageEnc[index]);
        keyArr.push(messageEnc[index]);
      }
    })

    messageArr.forEach((item, index) => {
      if (typeof item === 'number') {
        res.push(this.alphabet[(item + keyArr[index]) % 26])
      } else {
        res.push(item);
      }
    })

    return this.direct ? res.join('') : res.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    };

    let messageDec = encryptedMessage.toUpperCase().split('');
    let keyDec = key.toUpperCase().split('');
    let messageArr = [];
    let keyArr = [];
    let keyIndex = 0;
    let res = [];

    messageDec.forEach((item, index) => {
      if (this.alphabet.includes(item)) {
        messageArr.push(this.alphabet.indexOf(item));
        if (keyDec.length - 1 <= keyIndex) {
          keyArr.push(this.alphabet.indexOf(keyDec[keyIndex]));
          keyIndex = 0;
        } else {
          keyArr.push(this.alphabet.indexOf(keyDec[keyIndex]));
          keyIndex = keyIndex + 1;
        }
      } else {
        messageArr.push(messageDec[index]);
        keyArr.push(messageDec[index]);
      }
    })

    messageArr.forEach((item, index) => {
      if (typeof item === 'number') {
        let mod = 0;
        if ((item - keyArr[index]) < 0) {
          mod = (item - keyArr[index] + 26) % 26;
        } else {
          mod = (item - keyArr[index]) % 26;
        }
        res.push(this.alphabet[mod]);
      } else {
        res.push(item);
      }
    })
    return this.direct ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
