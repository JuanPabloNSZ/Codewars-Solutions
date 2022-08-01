function howMuchILoveYou(nbPetals) {
	let whatIsLove = [
		'not at all',
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
	];
	return whatIsLove[nbPetals % 6];
}
