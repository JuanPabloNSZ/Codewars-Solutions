/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/
// The old code that codewars gave us:
// function capitalizeWord(word) {
//     word[0].toUpperCase();
//     return word;
//   }

//*Parameters: A string, with lengths from 1 to 10 characters. It will never be an empty string.
//*Results: A string with its first character upper case.
//*Examples:
// capitalizeWord('i'), 'I')
// capitalizeWord('glasswear'), 'Glasswear')
//*Pseudocode: Review the original code that the challenge gave us: it has a method that capitalize the first character, but it return the same word passed as a parameter. So: Concatenate the first character already capitalized with the rest of the word. Return the result.

//* My Solution:
function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}

//* My other solution, which uses more string methods:
function capitalize(word) {
	let firstChar = word[0].toUpperCase();
	let restWord = word.slice(1).toLowerCase();
	return firstChar.concat(restWord);
}
