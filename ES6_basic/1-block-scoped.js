// conditional block.

export default function taskBlock(trueOrFalse) {
    // Use 'let' and 'const' for block-scoped
    let task = false;
    let task2 = true;

    if (trueOrFalse) {
        // Use 'let' and 'const' for block-scoped
        let task = true;
        let task2 = false;
    }

    // Return the values of the outer block-scoped
    return [task, task2];
}
