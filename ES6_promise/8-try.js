// 8-try.js

/**
 * Function that divides two numbers.
 * @param {number} numerator - Numerator.
 * @param {number} denominator - Denominator.
 * @returns {number} - Result of the division.
 * @throws {Error} - If the denominator is equal to 0.
 */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}
