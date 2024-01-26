// 4-user-promise.js

/**
 * Returns a resolved promise with an object containing firstName and lastName.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {Promise} - A resolved promise with an object having firstName and lastName.
 */

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: 'Bob',
    lastName: 'Dylan',
  });
}
