function solve(number) {
    let numberToString = number.toString();

    let sum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i])
    }

    let final = sum.toString().includes('9');
    console.log(final ? `${numberToString} Amazing? True` : `${numberToString} Amazing? False`);
}solve(1233)