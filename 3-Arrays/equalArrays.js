function solve(firstArray, secondArray) {
    let areEquals = true;
    let sum = 0;

    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
        sum += firstArray[i]
    }

    for (let i = 0; i < secondArray.length; i++) {
        secondArray[i] = Number(secondArray[i]);
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEquals = false;
            return;
        }
    }

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] == secondArray[i]) {
            console.log(`Arrays are identical. Sum: ${sum}`);
            break;
        }
    }
}
solve(['10', '20', '30'], ['10', '20', '30'])
console.log("-----------");
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])