function train (array) {

    let passengers = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++){
        let currentCommand = array[index].split(' ');

        if (currentCommand[0] === "Add") {
            let newWagon = Number(currentCommand[1]);
            passengers.push(newWagon);
        } else {
            for (let k = 0; k < passengers.length; k++) {
                let currWagonPassengers = passengers[k];
                if (currWagonPassengers + Number(currentCommand[0]) <= maxCapacity) {
                    passengers[k] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }

    console.log(passengers.join(' '));

}train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
