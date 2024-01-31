/* Updates the quantity of items to 100 for items with an initial quantity of 1 in the map */
const updateUniqueItems = (groceriesMap) => {
	if (!(groceriesMap instanceof Map)) throw new Error('Cannot process');
	for (const [item, quantity] of groceriesMap) {
		if (quantity === 1) {
			groceriesMap.set(item, 100);
		}
	}
};

export default updateUniqueItems;