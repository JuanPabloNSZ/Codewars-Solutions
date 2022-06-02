// Write a function that returns a string in which firstname is swapped with last name.

// My Solution:
function nameShuffler(str) {
	let newName = [];
	str.split(' ').map((x) => newName.unshift(x));
	return newName.join(' ');
}

// Other Solution, but this one changes the original array
function nameShuffler(str) {
	return str.split(' ').reverse().join(' ');
}
