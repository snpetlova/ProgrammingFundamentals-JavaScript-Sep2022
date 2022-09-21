function solve (n) {
    let printed = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        console.log(printed);
        sum += printed;
        printed += 2;
    }

    console.log("Sum: " + sum);
} solve(5)