function fixTheMeerkat(arr) {
	let newArray = arr.slice(1, -1);
	newArray.unshift(arr[arr.length - 1]);
	newArray.push(arr[0]);
	return newArray;
	// For this challenge I could use .reverse(), but I wanted to
	// change the order only of the first and the last element of the array
}
