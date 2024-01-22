/*This assignment is to practice using
try, catch, and finally in a function.*/
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
  