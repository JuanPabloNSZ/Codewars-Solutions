/* There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar). */

//* My solution:
function pillars(numPill, dist, width) {
	if (numPill <= 1 || dist < 10 || dist > 30 || width < 10 || width > 50) {
		return 0;
	} else {
		const distanceWithoutPillars = (numPill - 1) * dist * 100;
		const pillarsWidth = (numPill - 2) * width;
		return distanceWithoutPillars + pillarsWidth;
	}
}
