// Utilize let and const for block-scoped.
export default function taskBlock(trueOrFalse) {
    // Use let and const instead (block-scoped)
    let task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      // Use let and const instead (block-scoped)
      let task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }
  