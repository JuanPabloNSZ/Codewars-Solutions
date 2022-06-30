// Write a function that checks if a given string (case insensitive) is a palindrome.

// My Solution:
function isPalindrome(x) {
	let reversedWord = x.split('').reverse().join('');
	return x.toLowerCase() === reversedWord.toLowerCase();
}
