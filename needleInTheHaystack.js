/* Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index */

// My Solution:
function findNeedle(haystack) {
	let needleIndex = haystack.indexOf('needle');
	return `found the needle at position ${needleIndex}`;
}
