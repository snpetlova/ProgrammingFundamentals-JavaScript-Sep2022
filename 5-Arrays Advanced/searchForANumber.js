function searchForANumber(numbers, actions) {

    let toBeRemoved = actions[0];
    let elementsToDelete = actions[1];
    let specNumber = actions[2];

    let takenNumbers = numbers.slice(0, toBeRemoved)
    takenNumbers.splice(0, elementsToDelete)
    
    let counter = 0;

    for (const num of takenNumbers) {
        if (num === specNumber) {
            counter++;
        }
    }

    console.log(`Number ${specNumber} occurs ${counter} times.`);

}searchForANumber([5, 2, 3, 4, 1, 6],
[5, 2, 3])

