/* Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
*/

//* My solution:
function drawStairs(n) {
  if (n.length != 0) {
    let stairs = "";
    for (let i = 1; i <= n - 1; i++) {
      stairs += `I\n${" ".repeat(i)}`;
    }
    return stairs + "I";
  } else return "";
}
