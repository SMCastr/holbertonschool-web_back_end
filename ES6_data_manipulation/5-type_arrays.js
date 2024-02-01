// 5-typed_arrays.js

/**
 * Function to create a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to insert the Int8 value.
 * @param {number} value - The Int8 value to be inserted.
 * @returns {DataView} - DataView of the created ArrayBuffer.
 * @throws {Error} - Throws an error if adding the value is not possible.
 */
function createInt8TypedArray(length, position, value) {
	// Check if the position is within the valid range
	if (position < 0 || position >= length) {
	  throw new Error('Position outside range');
	}
  
	// Create a new ArrayBuffer with the specified length
	const buffer = new ArrayBuffer(length);
  
	// Create a DataView to manipulate the ArrayBuffer
	const dataView = new DataView(buffer);
  
	// Set the Int8 value at the specified position
	dataView.setInt8(position, value);
  
	return dataView;
  }
  
  // Export the function to make it accessible from other files
  export default createInt8TypedArray;
  