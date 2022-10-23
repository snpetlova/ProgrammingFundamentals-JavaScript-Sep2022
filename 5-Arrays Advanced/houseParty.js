function houseParty(array) {

    let guestListArr = [];

    for (const element of array) {

        let command = element.split(' ')
        let name = command[0];
        
        if (command.length === 3) {
            if (guestListArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestListArr.push(name)
            }
        } else {
            if (!guestListArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestListArr.indexOf(name);
                guestListArr.splice(index, 1)
            }
        }  
    }

    console.log(guestListArr.join('\n'));

}houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])

