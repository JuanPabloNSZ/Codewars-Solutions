/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list. */

// My Solution:
let min = function (list) {
	let minN = list.sort((a, b) => a - b);
	return minN[0];
};

let max = function (list) {
	let maxN = list.sort((a, b) => b - a);
	return maxN[0];
};
