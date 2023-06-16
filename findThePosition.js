/* When provided with a letter, return its position in the alphabet.

Input :: "a"
Ouput :: "Position of alphabet: 1"
*/

//* My solution:
function position(letter) {
  let charCode = letter.toLowerCase().charCodeAt() - 96;
  return `Position of alphabet: ${charCode}`;
}
