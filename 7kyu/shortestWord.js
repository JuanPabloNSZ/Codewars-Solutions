/* Given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

//* My solution
function findShort(s) {
	const wordsLength = s.split(' ').map((x) => x.length);
	return Math.min(...wordsLength);
}
