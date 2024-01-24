/*function getResponseFromAPI*/
function getResponseFromAPI() {
    // Return a new Promise
    return new Promise((resolve) => {
      // Resolve the Promise with an object representing a successful API response
      resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    });
  }
  
  // Export the function to make it available to other modules
  export default getResponseFromAPI;
  