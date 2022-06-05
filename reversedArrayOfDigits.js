/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order. */

function digitize(n) {
	//code here
	let nArray = Array.from(String(n), Number);
	return nArray.reverse();
}
