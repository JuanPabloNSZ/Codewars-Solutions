/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

//* My solution:
function isVow(a) {
	// Store the respective ASCII values of the vowels
	let asciiVowels = [97, 101, 105, 111, 117];
	// Evaluate if the array includes an element from asciiVowels
	// If true, show the respective vowel
	// If false, show the element of the array
	return a.map((x) => (asciiVowels.includes(x) ? String.fromCharCode(x) : x));
}
