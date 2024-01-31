/* Returns a string of set values that start with a specific string */
const cleanSet = (set, startString) =>
	Array.from(set)
		.filter((value) => value.startsWith(startString))
		.map((value) => value.slice(startString.length))
		.join('-');

export default cleanSet;
