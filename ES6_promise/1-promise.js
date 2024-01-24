/*Define the function getFullResponseFromAPI*/
function getFullResponseFromAPI(success) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Check the value of the success parameter
    if (success) {
      // If true, resolve the Promise with a success response
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If false, reject the Promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Export the function to make it available to other modules
export default getFullResponseFromAPI;