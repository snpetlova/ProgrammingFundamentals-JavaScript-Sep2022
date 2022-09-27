function solve (fNum, sNum, tNum) {
    let sum = fNum + sNum + tNum;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}solve(9, 100, 1.1)