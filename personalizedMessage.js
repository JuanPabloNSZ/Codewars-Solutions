/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:

name equals owner return 'Hello boss'
otherwise return 'Hello guest' */

// My solution:
function greet(name, owner) {
	return name === owner ? 'Hello boss' : 'Hello guest';
}
