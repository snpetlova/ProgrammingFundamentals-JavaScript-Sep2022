function arrayModificator(arr) {

    let array = arr
        .shift()
        .split(' ')
        .map(Number)

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum]
            = arr[i].toString().split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (command !== "end") {
            switch (command) {
                case "swap":
                    //takes two elements and swap their places
                    let first = array[firstNum];
                    let second = array[secondNum];
                    array[firstNum] = second;
                    array[secondNum] = first;
                    break;

                case "multiply":
                    //takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
                    let fIndex = array[firstNum];
                    let sIndex = array[secondNum];
                    array[firstNum] = fIndex * sIndex;
                    break;

                case "decrease":
                    //decreases all elements in the array with 1.
                    array = array.map(x => x - 1);
                    break;
            }
        }
    }

    console.log(array.join(', '));

} arrayModificator(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])