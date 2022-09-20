/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */

//* My solution:
const capitals = function (word) {
	const indexes = word
		.split('')
		.map((x, i) => (x.toLowerCase() !== x ? i : x))
		.filter((x) => !isNaN(x));
	return indexes;
};
