// 3-all.js


import { uploadPhoto, createUser } from './utils';

/**
 * Handles the profile signup by collectively resolving promises.
 */


export default function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          const { body, firstName, lastName } = result.value;
          console.log(`${body} ${firstName} ${lastName}`);
        } else {
          console.log('Signup system offline');
        }
      });
    })
    .catch((error) => {
      console.error('Error during signup:', error);
    });
}