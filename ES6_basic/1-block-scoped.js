// Utilize let and const for block-scoped.
export default function taskBlock(trueOrFalse) {
    let task = false;
    const task2 = true;

    if (trueOrFalse) {
      const task = true;
      let task2 = false;
    }

    return [task, task2];
  }
