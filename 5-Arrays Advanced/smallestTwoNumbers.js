function smallestTwoNumbers(array) {

    let sortedNumbers = array.sort((a, b) => {
        return a - b;
    });

    let result = sortedNumbers.slice(0,2)

    console.log(result.join(' '));

} smallestTwoNumbers([30, 15, 50, 5])