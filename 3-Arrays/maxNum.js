function solve(array) {

    let resultArr = [];

    for (let i = 0; i < array.length; i++) {

        let isBigger = true;
        let currNum = array[i];

        for (let k = i + 1; k < array.length; k++) {
            if (currNum <= array[k]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            resultArr.push(array[i]);
        }
    }

    console.log(resultArr.join(' '));

} solve([1, 4, 3, 2])