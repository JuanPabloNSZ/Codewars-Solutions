/* Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0. */

// My Solution:
function countBy(x, n) {
	let multiNum = [];
	for (let i = 1; i <= n; i++) {
		multiNum.push(i * x);
	}
	return multiNum;
}
