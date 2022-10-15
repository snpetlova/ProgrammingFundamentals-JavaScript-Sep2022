function numberModification(number){

    let numberToString = number.toString();
    let sum = 0;
    let counter = numberToString.length;
    let avgValue = averageSum()

    function averageSum() {
        let avg = 0;

        for (let i = 0; i < counter; i++) {
            let currentNum = Number(numberToString[i])
            avg += currentNum / counter;
        }
        return avg
    }

    while (avgValue < 5) {
        numberToString = numberToString.concat(9);
        counter++;
        avgValue = averageSum()
    }

    console.log(numberToString);

}numberModification(101)
