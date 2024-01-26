// 5-photo-reject.js

/**
 * Returns a rejected promise with an Error message indicating the file cannot be processed.
 * @param {string} fileName - The name of the file.
 * @returns {Promise} - A rejected promise with an Error.
 */

export default function uploadPhoto(fileName) {
  // Using backticks (`) for template literals
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
