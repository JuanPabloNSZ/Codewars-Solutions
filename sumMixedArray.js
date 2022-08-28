// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//* Parameters: An array of integers as strings and numbers.
//* Results: The sum of all the integers of the array.
//* Examples:
// sumMix([9, 3, '7', '3']), 22
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
//* Pseudocode: Transform every integer of the array to a Number, return the sum of the array values.

//* My solution:
function sumMix(x) {
	let arrNumbers = x.map((x) => Number(x));
	return arrNumbers.reduce((a, b) => a + b, 0);
}
