// Find the sum of all multiples of n below m

// My Solution:
function sumMul(n, m) {
	let arr = [];
	for (let i = 1; i <= m; i++) {
		if (i * n < m) {
			arr.push(i * n);
		}
	}
	let sumArr = arr.reduce((a, b) => a + b, 0);
	return sumArr > 0 ? sumArr : 'INVALID';
}
