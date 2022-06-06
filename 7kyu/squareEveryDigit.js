/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

// My Solution:
function squareDigits(num) {
	// this transform the num argument to an Array
	let arrN = Array.from(String(num), Number);
	// this raise to the power of 2 every digit, then return the result as a number
	return Number(arrN.map((x) => x ** 2).join(''));
}
