/* Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? */

//* My solution:
const getMax1 = (getMax2 = () => ({ name: "Max Headroom" }));

// My old solution:
// function getMax1() {
//   let max1 = {
//     name: "Max Headroom",
//   };
//   return max1;
// }

// function getMax2() {
//   let max2 = {
//     name: "Max Headroom",
//   };
//   return max2;
// }
