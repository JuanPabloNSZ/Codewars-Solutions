/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. */

// My Solution:
String.prototype.toAlternatingCase = function () {
	return this.split('')
		.map((x) => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
		.join('');
};
