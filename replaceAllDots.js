/* The code provided is supposed replace all the dots . in the specified String str with dashes -
But it's not working properly. */

//* Before:
// let replaceDots = function(str) {
// return str.replace(/./, '-');
// };

//* My Solution:
let replaceDots = function (str) {
	return str.replace(/\./g, '-');
};
