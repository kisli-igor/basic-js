const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1
    time = Math.floor(turns * (3600 / turnsSpeed))

    return result = {
        "turns": turns,
        "seconds": time
    }
};
