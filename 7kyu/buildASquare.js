/*

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

//* My solution:
function generateShape(integer) {
	let shape = '';
	let arr = [];

	// Creates a row with n elements of '+' symbol, then push to an array
	for (let i = 1; i <= integer; i++) {
		arr.push('+');
	}

	// Creates n rows of the array;
	for (let i = 1; i <= integer; i++) {
		shape += `${str.join('')}\n`;
	}
	// Return the group of rows
	return shape.slice(0, -1);
}
