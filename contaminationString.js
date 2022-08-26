/* An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string. */

//* Parameters: Two strings: the first a text, the second a character (lenght 1). Both could be an empty string, but not at the same time.
//* Results: A string, where every character is same as the input character from the parameter.
//* Examples:
// contamination("","z"), "")
// contamination("abc",""), "")
// contamination("_3ebzgh4","&"), "&&&&&&&&")
//* Pseudocode: Count how many characters has the text parameter, return a string with the same length of text parameter but only with the characters from character parameter.

//* My solution:
function contamination(text, char) {
	return char.repeat(text.length);
}
