/* There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right).

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity. */

//* My Solution:
const flip = (d, a) => {
	if (d === 'R') {
		return a.sort((a, b) => a - b);
	} else if (d === 'L') {
		return a.sort((a, b) => b - a);
	}
};
