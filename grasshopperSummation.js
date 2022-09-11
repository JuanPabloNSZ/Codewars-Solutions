/* Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */

//* My solution:
const summation = function (num) {
	const array = Array.from({ length: num }, (x, i) => i + 1);
	return array.reduce((a, b) => a + b);
};
