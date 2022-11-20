function addressList(arr) {

    let addressBook = {};

    for (let entry of arr) {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    }

    let savedAdresses = Object.entries(addressBook);
    savedAdresses.sort((a, b) => a[0].localeCompare(b[0]));

    for(let entry of savedAdresses) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }
    

}addressList(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])