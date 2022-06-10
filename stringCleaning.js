/* Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact. */

// My Solution:
function stringClean(s) {
	return s
		.split('')
		.filter((x) => x != parseFloat(x))
		.join('');
}
