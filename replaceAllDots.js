/* The code provided is supposed replace all the dots . in the specified String str with dashes -
But it's not working properly. */

//* Before:
// let replaceDots = function(str) {
// return str.replace(/./, '-');
// };

//* My Solution:
let replaceDots = function (str) {
	// added the \ to escape special characters
	// added the g so that replace is run for all occurences in the string
	return str.replace(/\./g, '-');
};
