export default function tasBlock (trueOrfalse) {
        
    const task = false;
    const task2 = true;

    if (trueOrfalse) {
        task = true;
        task2 = false;
    }

    return [task, task2]
}
