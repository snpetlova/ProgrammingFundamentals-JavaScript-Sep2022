function solve(input) {
    
    let res = [];

    for (let i = 0; i < input.length; i++) {
    if (input[i] === "add") {
        res.push(i + 1);
    } else if (input[i] === "remove"){
        res.pop();
    }
}

if (res.length === 0) {
    console.log("Empty");
} else {
    console.log(res.join(' '));
}

} solve(['add', 'add', 'remove', 'add', 'add'])