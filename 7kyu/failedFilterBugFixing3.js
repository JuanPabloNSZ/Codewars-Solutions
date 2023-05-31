/* Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string. */

// var FilterNumbers = function(str) {
//   return str.split('').filter(c => !parseInt(c)).join('');
// }

//* My solution:
var FilterNumbers = function (str) {
  return str
    .split("")
    .filter((x) => isNaN(x))
    .join("");
};
