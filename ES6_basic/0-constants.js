// Use 'const' to instantiate whenever possible
export function taskFirst() {
    const task = "I prefer const when I can.";
    return task;
}

export function getLast() {
    return "is okay";
}

export function taskNext() {
    // Use 'let' when needs to be reassigned
    let combination = "But sometimes let";
    combination += getLast();

    return combination;
}
