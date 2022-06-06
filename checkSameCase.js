/* Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0 */

// My Solution
function sameCase(a, b) {
	let aLow = a.toLowerCase();
	let aUp = a.toUpperCase();
	let bLow = b.toLowerCase();
	let bUp = b.toUpperCase();

	if (aLow === aUp || bLow === bUp) {
		return -1;
	} else if ((a === aUp && b === bUp) || (a === aLow && b === bLow)) {
		return 1;
	} else if ((a === aUp && b === bLow) || (a === aLow && b === bUp)) {
		return 0;
	}
}
