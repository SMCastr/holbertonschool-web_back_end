// 2-then.js


/**
 * Handles the response from the API promise.
 * @param {Promise} promise - The API promise.
 * @returns {Promise} - A new promise with attached handlers.
 */


export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      return new Error();
    });
}