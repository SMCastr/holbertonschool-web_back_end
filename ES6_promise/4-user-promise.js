// 4-user-promise.js

/**
 * Returns a resolved promise with an object containing the fields firstName and lastName.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {Promise} - A resolved promise with an object having.
 */

export default function signUpUser(firstName, lastName) {
  // Using object shorthand notation to improve readability
  return Promise.resolve({
    firstName,
    lastName,
  });
}
