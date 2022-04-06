// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
	findSmallestInt(args) {
		let orderArr = args.sort((a, b) => a - b);
		let smallestN = orderArr.shift(0);
		return smallestN;
	}
}
