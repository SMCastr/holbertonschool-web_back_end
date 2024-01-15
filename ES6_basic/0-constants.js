export default function tasBlock (trueOrfalse) {
    
    let task = false;
    let task2 = true;

    if (trueOrfalse) {
        task = true;
        task2 = false;
    }

    return [task, task2]
}

