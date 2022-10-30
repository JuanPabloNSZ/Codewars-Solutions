/* Functional closures can get overly attached. Set them straight!
Why doesn't greet_abe() actually greet Abe? */

// Old Code
var name = 'Abe';
var greet_abe = function () {
	return 'Hello, ' + name + '!';
};
name = 'Ben';
var greet_ben = function () {
	return 'Hello, ' + name + '!';
};

//* My solution:
let aName = 'Abe';
let greet_abe = function () {
	return `Hello, ${aName}!`;
};

let bName = 'Ben';
let greet_ben = function () {
	return `Hello, ${bName}!`;
};
