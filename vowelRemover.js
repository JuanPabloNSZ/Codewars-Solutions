// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//* Parameters: A string
//* Results: A string without lowercase vowels
//* Examples:
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
//* Pseudocode: Create an array of lowercase vowels. Take the string from the argument and apply a method to get every character from the string, filter only the characters that are not part of the vowels array, return the result as a string.

//* My Solution:
function shortcut(string) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	return string
		.split('')
		.filter((x) => !vowels.includes(x))
		.join('');
}
