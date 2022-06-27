// Write a function that returns both the minimum and maximum number of the given list/array.

// My Solution:
function minMax(arr) {
	let arrSorted = arr.sort((a, b) => a - b);
	let firstNum = arrSorted[0];
	let lastNum = arrSorted[arrSorted.length - 1];
	return [firstNum, lastNum];
}
