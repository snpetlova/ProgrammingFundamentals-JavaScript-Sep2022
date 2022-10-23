function negativeOrPositiveNumbers(array){

    let resultedArray = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] < 0) {
            resultedArray.unshift(array[i])
        } else {
            resultedArray.push(array[i])
        }
    }

    console.log(resultedArray.join('\n'));

}negativeOrPositiveNumbers(['7', '-2', '8', '9'])