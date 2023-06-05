/* Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//* My solution:
function replace(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  return s
    .split("")
    .map((x) => (vowels.includes(x.toLowerCase()) ? "!" : x))
    .join("");
}
