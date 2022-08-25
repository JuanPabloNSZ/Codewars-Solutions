// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//* Update 25/08/2022 using PREP approach
//* Parameters: A string with two characters, the second of which is the symbolic representation of a card suit (4 suits)
//* Results: A string of the name of the suit ONLY, in all lowercase letters
//* Examples:
// ('Q♠'), 'spades')
// ('9♦'), 'diamonds')
// ('J♥'), 'hearts')
//* Pseudocode: Take the card and see which one of the 4 suits contains (clubs, diamonds, hearts, spades). Depending of which suit the card includes, return the name of the suit in lowercase as a string.

// My old solution:
/* function defineSuit(card) {
	if (card.includes('♣')) {
		return 'clubs';
	} else if (card.includes('♦')) {
		return 'diamonds';
	} else if (card.includes('♥')) {
		return 'hearts';
	} else if (card.includes('♠')) {
		return 'spades';
	}
} */

// A new and cleaner version of the solution:
function defineSuit(card) {
	if (card.includes('♣')) return 'clubs';
	if (card.includes('♦')) return 'diamonds';
	if (card.includes('♥')) return 'hearts';
	if (card.includes('♠')) return 'spades';
}
