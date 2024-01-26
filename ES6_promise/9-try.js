// 9-try.js

/**
 * Function that creates a guardrail around a math function.
 * @param {Function} mathFunction - Math function to be guarded.
 * @returns {Array} - Array containing the result or error message.
 */

export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
