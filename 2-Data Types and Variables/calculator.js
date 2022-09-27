function solve(firstNumber, operator, secondNumber) {
    let sum = 0
    switch (operator) {
        case '+':
            sum = firstNumber + secondNumber;
            break;
        case '-':
            sum = firstNumber - secondNumber;
            break;
        case '/':
            sum = firstNumber / secondNumber;
            break;
        case '*':
            sum = firstNumber * secondNumber;
            break;
    }

    console.log(sum.toFixed(2));
} solve(5, '+', 10)