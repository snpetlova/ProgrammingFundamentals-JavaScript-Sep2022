function solve(array, sum) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (Number(array[i]) + Number(array[j]) === Number(sum)) {
                console.log(array[i] + ` ` + array[j]);
            }
            
        }  
    }
} solve([1, 7, 6, 2, 19, 23],

    8)