// Your task is to return the correct string using the Template String Feature.
// You must output a string containing the two strings with the word 'are'

//* Parameters: Two Strings.
//* Results: A string containing the two strings passed as arguments with the word 'are' in between.
//* Examples:
// TempleStrings("Animals","Good"), 'Animals are Good')
//* Pseudocode: Use template literal notation to put the two arguments between the word 'are'. Return the string that results from the template literal.

//* My solution:
let TempleStrings = function (obj, feature) {
	return `${obj} are ${feature}`;
};
