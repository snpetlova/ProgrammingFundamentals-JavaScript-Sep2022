function perfectNumber(num) {

    let divisors = []; // array of divisors

    for (let i = 0; i < num; i++){
        if (num % i === 0) {
            divisors.push(i)
        }
    }

    let arrayLength = divisors.length;
    let sumOfDivisors = 0;

    for (let k = 0; k < arrayLength; k++){
        sumOfDivisors += divisors[k];
    }

    if (sumOfDivisors === num) {
        console.log(`We have a perfect number!`);
    } else {
        console.log("It's not so perfect.");
    }

}perfectNumber(6)
perfectNumber(1236498)