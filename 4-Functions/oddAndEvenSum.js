//You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.

function oddAndEvenSum(number) {

    let numberToString = number.toString();

    let evenSum = 0;
    let oddSum = 0;
    let numToStringLength = numberToString.length;

    for (let i = 0; i < numToStringLength; i++) {
        let singleNum = Number(numberToString[i]);


        if (singleNum % 2 === 0) {
            evenSum += singleNum;
        } else {
            oddSum += singleNum;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

} oddAndEvenSum(1000435)

