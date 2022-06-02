/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

// My Solution:
function getSum(a, b) {
	if (a === b) {
		return a;
	} else if (a < b) {
		let allInt = [];
		for (let i = a; i <= b; i++) {
			allInt.push(i);
		}
		return allInt.reduce((x, y) => x + y);
	} else if (a > b) {
		let allInt = [];
		for (let i = b; i <= a; i++) {
			allInt.push(i);
		}
		return allInt.reduce((x, y) => x + y);
	}
}
