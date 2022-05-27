// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100   'A'
// 80 <= score < 90     'B'
// 70 <= score < 80     'C'
// 60 <= score < 70     'D'
// 0 <= score < 60      'F'

function getGrade(s1, s2, s3) {
	let average = (s1 + s2 + s3) / 3;
	switch (true) {
		case average >= 90 && average <= 100:
			return 'A';
			break;
		case average >= 80 && average < 90:
			return 'B';
			break;
		case average >= 70 && average < 80:
			return 'C';
			break;
		case average >= 60 && average < 70:
			return 'D';
			break;
		case average >= 0 && average < 60:
			return 'F';
			break;
	}
}

function getGrade(s1, s2, s3) {
	let average = (s1 + s2 + s3) / 3;
	if (average >= 90 && average <= 100) {
		return 'A';
	} else if (average >= 80 && average < 90) {
		return 'B';
	} else if (average >= 70 && average < 80) {
		return 'C';
	} else if (average >= 60 && average < 70) {
		return 'D';
	} else if (average >= 0 && average < 60) {
		return 'F';
	}
}
