//A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
//Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

function palindromeIntegers(array) {

    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        let numAsString = array[index].toString();  
        let reversed = "";

        for (let k = numAsString.length - 1; k >= 0; k--) {
            reversed += numAsString[k]
        }

        if (reversed === numAsString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

} palindromeIntegers([123,323,421,121])