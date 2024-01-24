/*Define the function handleResponseFromAPI*/
export default function handleResponseFromAPI(promise) {
  // Append handlers to the given Promise using the .then() and .catch() methods
  promise
    .then((result) => {
      // When the Promise resolves, log a message to the console
      console.log('Got a response from the API');

      // Return an object representing a successful response
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      // When the Promise rejects, log a message to the console

      // Return an empty Error object
      return new Error();
    });
}
