//Write a function that receives two integer numbers. 
//Calculate the factorial of each number. Divide the first result by the second 
//and print the division formatted to the second decimal point.

function factorialDivision(firstNum, secondNum) {

    let factOfFirst = firstNum;
    let factOfSecond = secondNum;

    for (let i = 1; i < firstNum; i++){
        let multiply = firstNum - i;
        factOfFirst = multiply * factOfFirst;
    }

    for (let k = 1; k < secondNum; k++){
        let secondMultiply = secondNum - k;
        factOfSecond = secondMultiply * factOfSecond;
    }

    console.log((factOfFirst/factOfSecond).toFixed(2));

}factorialDivision(5,2)