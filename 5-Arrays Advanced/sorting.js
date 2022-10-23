//Write a function that sorts an array of numbers so that the first element is the biggest one, 
//the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on.
//Print the elements on one row, separated by a single spac

function sorting(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let resArr = [];

    for (let i = 0; i < sortedArr.length; i++) {
        let lastElement = sortedArr.pop();
        resArr.push(lastElement)
        let firstElement = sortedArr.shift();
        resArr.push(firstElement)

    }
    
    resArr.push(sortedArr.pop())
    resArr.push(sortedArr.shift())

    console.log(resArr.join(' '));


} sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

