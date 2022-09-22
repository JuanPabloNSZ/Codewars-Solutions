/* Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9 */

//* My solution:
function sumOfDifferences(arr) {
	let sortedArr = arr.sort((a, b) => b - a, 0);
	let arrNum = [];

	for (let i = 0; i < sortedArr.length; i++) {
		arrNum.push(sortedArr[i] - sortedArr[i + 1]);
	}
	return arrNum.filter((x) => !isNaN(x)).reduce((a, b) => a + b, 0);
}
