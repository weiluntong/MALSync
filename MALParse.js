l = [
  "Cardcaptor Sakura",
  "Chibi☆Devi!",
  "Ginga Eiyuu Densetsu",
  "Hokuto no Ken",
  "Kagaku Ninja-tai Gatchaman",
  "Les Misérables: Shoujo Cosette",
  "Mobile Suit Gundam Wing",
  "Monster Farm: Enbanseki no Himitsu",
  "Nana",
  "Saiki Kusuo no Ψ-nan",
  "Shirokuma Cafe",
  "Sousei no Onmyouji",
  "Suite Precure♪",
  "Uchuu Kyoudai"
]

f = () => {
    let acc = [...jQuery('table > tbody > tr')]
                .filter(a => a.childElementCount == 7 && a.firstElementChild.className != "table_header" && parseInt(a.children[4].children[0].firstElementChild.innerText.split('/')[1]) < 45)
    acc = acc.map(x => x.children[1].innerText.split("\n")[1])
    return acc
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
shuffle = (array) => {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};


shuffle(f())
