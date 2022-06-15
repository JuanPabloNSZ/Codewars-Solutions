/* Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input: 5, true, false
expected result would be: [true, false, true, false, true] */

// My Solution:
function alternate(n, firstValue, secondValue) {
	let arr = Array(n)
		.fill()
		.map((x, i) => (i % 2 === 0 ? (x = firstValue) : (x = secondValue)));
	return arr;
}
