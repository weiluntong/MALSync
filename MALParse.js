const f = async () => {
	const api = '//api.jikan.moe/v3/'
	const data = await fetch(api + 'user/weiluntong/animelist/plantowatch')
	.then((response) => {
		return response.json()
	})
	let list = []
	for (const element of data.anime) {
		if (element.type == "Movie" || element.total_episodes >= 45)
			continue

		const info = await fetch(api + 'anime/' + element.mal_id)
		.then((response) => {
			return response.json()
		})
		let genres = []
		for (const genre of info.genres)
			genres.push(genre.name)
		if (!romCom(genres))
			list.push(element.title)
		// list.push(element.title)
	}
	return list
}

const romCom = (genres) => {
	const romComGenres = ['Harem', 'Romance', 'Shoujo', 'Ecchi', 'Slice of Life', 'Comedy']
	for (const genre of romComGenres)
		if (genres.includes(genre))
			return true
	return false
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param {Array} array The array to shuffle
 * @return {String} The first item in the shuffled array
 */
const shuffle = (array) => {

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

shuffle(await f())
