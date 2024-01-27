// 6-final-user.js

const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');

/**
 * Handles multiple promises and returns an array of results.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @param {string} fileName - The name of the file.
 * @returns {Promise} - A promise that resolves to an array of objects with status and value/error.
 */
module.exports = function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  promises.push(
    signUpUser(firstName, lastName)
      .then((result) => ({ status: 'fulfilled', value: result }))
      .catch((error) => ({ status: 'rejected', reason: error }))
  );

  promises.push(
    uploadPhoto(fileName)
      .then((result) => ({ status: 'fulfilled', value: result }))
      .catch((error) => ({ status: 'rejected', reason: error }))
  );

  return Promise.allSettled(promises);
};
