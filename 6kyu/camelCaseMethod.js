/* Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord */

//* My solution:
String.prototype.camelCase = function () {
	if (this.length > 0)
		return this.split(' ')
			.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase())
			.join('');
	else return String(this);
};
