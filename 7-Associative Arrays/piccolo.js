function parking(input) {

    let parkingList = new Map();

    let fullList = input.map(el => el.split(', '));
    
    fullList.forEach(element => {
        const command = element[0];
        const carPlate = element[1];

        if(command === 'IN') {
            parkingList.set(carPlate, command);
        } else if (command === 'OUT') {
            parkingList.delete(carPlate);
        }
    });

    let sortedPlates = Array.from(parkingList).sort((a,b) => a[0].localeCompare(b[0]));

    if (sortedPlates.length === 0) {
        console.log('Parking Lot is Empty');
    }
    sortedPlates.forEach((carPlate) => console.log(carPlate[0]));
   

}parking([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])