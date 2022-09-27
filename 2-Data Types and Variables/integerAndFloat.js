function solve(fNum, sNum, tNum) {
    let sum = fNum + sNum + tNum;

    if (sum % 1 === 0) {
        sum += ' - Integer'
    } else {
        sum += ' - Float'
    }
    console.log(sum);
} solve(100, 200, 303)