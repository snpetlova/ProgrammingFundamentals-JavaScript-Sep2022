function solve(array) {

    let rotations = array[array.length - 1];
    array.pop();

    for (let i = 1; i <= rotations; i++) {
        let toBeMoved = array.pop();
        array.unshift(toBeMoved)
        //array.push(toBeMoved)
    }

    console.log(array.join(' '));

} solve(['1', '2', '3', '4', '2'])