const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(time) {
  if (!time) return "Unable to determine the time of year!";

  let month = Date.prototype.getMonth.call(time);

  if (month == 0 || month == 11 || month == 1) return "winter";
  else if (month == 2 || month == 3 || month == 4) return "spring";
  else if (month == 5 || month == 6 || month == 7) return "summer";
  else if (month == 8 || month == 9 || month == 10) return "autumn"
}
