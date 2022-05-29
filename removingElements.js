/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. */

// My solution:
function removeEveryOther(arr) {
	let filtered = arr.filter(function (x, i) {
		return i % 2 === 0;
	});
	return filtered;
}

// Example test:
//* removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
// Result:
//* ['Hello', 'Hello Again'];
