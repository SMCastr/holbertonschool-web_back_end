// 9-try.js

/**
 * Function that creates a guardrail around a math function.
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} - Array containing the result or error message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
