// Use 'const' to instantiate whenever possible
export function taskFirst() {
    const task = "I prefer const when I can.";
    const task2 = "Also const is a block-scoped variable.";
    return task;
}

export function getLast() {
    return "is okay";
}

export function taskNext() {
    // Use 'let' when needs to be reassigned
    let combination = "But sometimes let";
    let combination2 = "is okay too.";
    combination += getLast();

    return combination;
}
