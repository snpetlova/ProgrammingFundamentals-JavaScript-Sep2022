function solve(numbers) {

    let evenSum = 0;
    let oddSum = 0;
    

    for (let numberAsText of numbers) {
        let number = Number(numberAsText);

        if (number % 2 === 0) {
           evenSum += number; 
        } else {
            oddSum += number;
        }
    }

    let diff = evenSum - oddSum
    console.log(diff);
} 
solve([3,5,7,9])