const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine){
    this.machine = machine
  }

  encrypt(str, key) {
    if(str == undefined || key == undefined){
      throw new Error;
    } else {
      str = str.toUpperCase();
      key = key.toUpperCase();
      let encryptedStr = []
      const alphabet =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let count = 0
      for (let x = 0; x < str.length; x++){
        if (alphabet.includes(str[x])){
          encryptedStr.push(alphabet [(alphabet.indexOf(str[x]) + alphabet.indexOf(key[count % key.length])) % alphabet.length])
          count += 1;
        } else {
          encryptedStr.push(str[x])
        }
      } return this.machine !== false ? encryptedStr.join("") : encryptedStr.reverse().join("")
    }
  }
  decrypt(str, key) {
      if(str == undefined || key == undefined){
        throw new Error;
      } else {
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        str = str.toUpperCase();
        key = key.toUpperCase();
        let decrypted = [];
        let count = 0;
        for (let x = 0; x < str.length; x++) {
          if (alphabet.includes(str[x])) {
            decrypted.push(alphabet[(26 + alphabet.indexOf(str[x]) - alphabet.indexOf(key[count % key.length]) ) % alphabet.length]);
            count += 1;
          } else {
            decrypted.push(str[x]);
          }
        }
        return this.machine !== false ? decrypted.join('') : decrypted.reverse().join('');
      }
    }

    }

module.exports = VigenereCipheringMachine;
