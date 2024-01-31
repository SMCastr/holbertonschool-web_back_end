/* Returns a new ArrayBuffer with an Int8 value at a specific position */
const createInt8TypedArray = (length, position, value) => {
	if (position >= length) throw new Error('Position outside range');
	const buffer = new ArrayBuffer(length);
	const view = new DataView(buffer);
	view.setInt8(position, value);
	return view;
};

export default createInt8TypedArray;

