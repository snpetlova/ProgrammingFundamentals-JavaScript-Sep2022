function solve(input) {

    let resultArr = [];
    let inputedArrSum = 0;
    let resultedArrSum = 0;
    let inputedArrLength = input.length;

    for (let i = 0; i < inputedArrLength; i++) {
        if (input[i] % 2 === 0) {
            let even = input[i] + i;
            resultArr.push(even);
        } else {
            let odd = input[i] - i;
            resultArr.push(odd);
        }

        inputedArrSum += input[i];
        resultedArrSum += resultArr[i]
        
    }
    console.log(resultArr);
    console.log(inputedArrSum);
    console.log(resultedArrSum);
    
}solve([5, 15, 23, 56, 35])