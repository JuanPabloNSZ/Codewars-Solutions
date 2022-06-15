/* Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

// My New Solution, after learn more about the 'reduce method'
function oddOrEven(array) {
	return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
}

// My Old Solution:
function oddOrEven(array) {
	if (array.length === 0) {
		return 'even';
	} else {
		return array.reduce((a, b) => a + b) % 2 === 0 ? 'even' : 'odd';
	}
}
