/*
1. The arguments are passed as strings.
2. The numbers may be way very large
3. Answer should be returned as a string
4. The returned "number" should not start with zeros e.g. 0123 is invalid */

// My Solution:
function multiply(a, b) {
	let strNumber = BigInt(a) * BigInt(b);
	return String(strNumber);
}
