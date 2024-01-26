// 0-promise.js

/**
 * Function that returns a resolved Promise.
 * @returns {Promise} - Resolved Promise.
 */

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      resolve();
    } else {
      reject();
    }
  });
}
