const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw Error()

  let transformedArr = arr.map( el => el);

  for (let index = 0; index < transformedArr.length; index++){
    if (transformedArr[index] == '--discard-next'){
      if (index == transformedArr.length - 1) {
        transformedArr.splice(index,1)
        index--;
      }
      else if (transformedArr[index+2] == '--discard-prev' || transformedArr[index+2] == '--double-prev'){
        transformedArr.splice(index, 3)
        index--;
      } else {
        transformedArr.splice(index, 2)
        index--;
      }
    }
    else if (transformedArr[index] == '--discard-prev'){
      if (index == 0){
        transformedArr.splice(index,1)
        index--;
      } else {
        transformedArr.splice(index-1, 2)
        index--;
      }
    }
    else if (transformedArr[index] == '--double-next'){
      if (index == transformedArr.length - 1){
        transformedArr.splice(index,1)
        index--;
      } else {
        transformedArr[index] = transformedArr[index+1];
      }
    }
    else if (transformedArr[index] == '--double-prev'){
      if (index == 0){
        transformedArr.splice(index,1)
        index--;
      } else {
        transformedArr[index] = transformedArr[index-1];
      }
    }
    else continue
  }
  return transformedArr;
};