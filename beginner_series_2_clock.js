// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
	//#Happy Coding! ^_^
	const milisecond = 1000;
	const secondToMil = 1 * milisecond;
	const minuteToMil = 60 * secondToMil;
	const hourToMil = 60 * minuteToMil;
	return h * hourToMil + m * minuteToMil + s * secondToMil;
}
