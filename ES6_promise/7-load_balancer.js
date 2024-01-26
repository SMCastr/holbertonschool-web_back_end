// 7-load_balancer.js

/**
 * Load balancer function that returns the value of the first resolved promise.
 * @param {Promise} chinaDownload - Promise for downloading from China.
 * @param {Promise} USDownload - Promise for downloading from the US.
 * @returns {Promise} - A promise that resolves to the value of the first resolved promise.
 */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
