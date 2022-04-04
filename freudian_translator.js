// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

function toFreud(string) {
	if (string === '') {
		return string;
	} else {
		let everyWord = string.split(' ');
		for (var i = 0; i < everyWord.length; i++) {
			everyWord[i] = 'sex';
		}
		let newString = everyWord.join(' ');
		return newString;
	}
}
