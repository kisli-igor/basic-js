const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter = 0;

  arr.forEach( subArr => {
    subArr.forEach( el => {
      (el === "^^") ? counter++ : counter;
      })
    })
  return counter;
}


