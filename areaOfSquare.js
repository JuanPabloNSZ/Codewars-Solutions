/* Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals. */

// My Solution:
function squareArea(A) {
	let radio = (2 * A) / Math.PI;
	let sqrArea = Math.pow(radio, 2);
	return Number(sqrArea.toFixed(2));
}
