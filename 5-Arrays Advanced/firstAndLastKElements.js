function firstAndLastKElements(array) {

    let k = array.shift()

    let firstElement = array.slice(0, k);
    let lastElement = array.slice(array.length - k);

    console.log(firstElement.join(' '));
    console.log(lastElement.join(' '));

}firstAndLastKElements([2, 7, 8, 9])