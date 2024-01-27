import handleProfileSignup from './path-to-your/6-final-user'; // Update the path accordingly

describe('Your test suite', () => {
  test('handleProfileSignup returns the right array', async () => {
    const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
    expect(queue).toEqual([
      {
        status: 'fulfilled',
        value: {
          status: 'fulfilled',
          value: {
            firstName: 'John',
            lastName: 'Doe',
            // Add other properties if any
          },
        },
      },
      {
        status: 'fulfilled',
        value: {
          status: 'rejected',
          reason: new Error('Gerald.jpg cannot be processed'),
        },
      },
    ]);
  });
});