function solve(firstArr,secondArr) {

    let resultArr = [];
    let firstArrLength = firstArr.length;

    for (let index = 0; index < firstArrLength; index++) {
        
        if (index % 2 === 0) {
            resultArr.push(Number(firstArr[index]) + Number(secondArr[index]));
        } else {
            resultArr.push(firstArr[index] + secondArr[index])
        }
    }

    console.log(resultArr.join (" - "));
} 
solve(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])