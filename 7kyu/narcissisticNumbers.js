/* A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
13 + 53 + 33 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number. */

// My Solution:
function isNarcissistic(n) {
	// first, this transform the number to an array, because it's easy to manipulate
	let arrNum = Array.from(String(n), Number);

	// second, this create a new variable that contains the length of the number
	let arrLength = arrNum.length;

	// last, every digit is raised to the power of 'arrLength'
	// then, the sum of the digits are compared with the original number
	return arrNum.map((x) => x ** arrLength).reduce((a, b) => a + b) === n;
}
