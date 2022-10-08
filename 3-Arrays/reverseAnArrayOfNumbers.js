function solve(n, array) {

    let revNums = [];

    for (let i = n - 1; i >= 0; i--) {
        revNums.push(array[i])
    }

    console.log(revNums.join(' '));

} solve(4, [-1, 20, 99, 5])