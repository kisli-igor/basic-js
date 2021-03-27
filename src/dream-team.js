const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
  if (Array.isArray(team)){
      let dreamTeamName = [];
      team.forEach( person => {

        if (typeof(person) === "string"){
          dreamTeamName.push(person.trim()[0].toUpperCase())
        }
      })
      return dreamTeamName.sort().join("")
  }
  return false
};
