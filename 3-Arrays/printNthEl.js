function solve(array) {

    let lastEl = array[array.length - 1];
    let resArr = [];

    for (let i = 0; i < array.length - 1; i++) { 
        if ( i % lastEl === 0) {
            resArr.push(array[i])
        }
    }

    console.log(resArr.join(' '));
} solve(['5', '20', '31', '4', '20', '2'])