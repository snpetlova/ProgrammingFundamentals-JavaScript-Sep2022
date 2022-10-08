function solve(numbers) {

    let sum = 0;

    for (let numberAsText of numbers) {
        let number = Number(numberAsText);

        if (number % 2 === 0) {
           sum += number; 
        }
    }

    console.log(sum);
} solve(['1','2','3','4','5','6'])