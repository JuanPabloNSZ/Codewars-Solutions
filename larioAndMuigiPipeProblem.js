/* Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8 */

// My Solution:
function pipeFix(numbers) {
	let numberFixed = [];
	let firstN = numbers[0];
	let lastN = numbers.slice(-1);

	for (let i = firstN; i <= lastN; i++) {
		numberFixed.push(i);
	}
	return numberFixed;
}
