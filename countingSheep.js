/* Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). */

// My Solution:
function countSheeps(arrayOfSheep) {
	let trueSheep = 0;
	arrayOfSheep.map((x) => (x ? (trueSheep += 1) : false));
	return trueSheep;
}
