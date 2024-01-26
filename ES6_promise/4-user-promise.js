// 4-user-promise.js

/**
 * Retorna una promesa resuelta con un objeto que contiene los campos firstName y lastName.
 * @param {string} firstName - El nombre.
 * @param {string} lastName - El apellido.
 * @returns {Promise} - Una promesa resuelta con un objeto que tiene los campos firstName y lastName.
 */

export default function signUpUser(firstName, lastName) {
  // Usando la notación de propiedad abreviada para mejorar la legibilidad
  return Promise.resolve({
    firstName,
    lastName,
  });
}
