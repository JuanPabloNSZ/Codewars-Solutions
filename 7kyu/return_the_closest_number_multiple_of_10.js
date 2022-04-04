// Given a number return the closest number to it that is divisible by 10.

const closestMultiple10 = (num) => {
	num = Math.round(num / 10);
	return num * 10;
};
