function flights(arr) {

    let flights = {};

    let flightInfoArr = arr[0];
    let flightStatusArr = arr[1];
    let checkStatus = arr[2];
    
    flightInfoArr.forEach(el => {
        let [flightNumber, destination] = el.split(' ');
        flights[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });

    flightStatusArr.forEach(el => {
        let [flightNumber, status] = el.split(' ');
        if (flights.hasOwnProperty(flightNumber)) {
            flights[flightNumber].Status = status;
        }
    });

    for (let num in flights) {
        if (flights[num].Status === String(checkStatus)) {
            console.log(flights[num]);
        }
    }

}flights([[
'WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],

['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK430 Cancelled'],

['Cancelled']
])

flights([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York', 
'WN1173 California', 
'DL2120 Texas', 
'KL5744 Illinois', 
'WN678 Pennsylvania'], 
['DL2120 Cancelled', 
'WN612 Cancelled', 
'WN1173 Cancelled', 
'SK330 Cancelled'], 
['Ready to fly'] ])