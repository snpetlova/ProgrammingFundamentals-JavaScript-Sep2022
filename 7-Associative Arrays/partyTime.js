function partyTime(input) {

    let vipGuests = [];
    let regularGuests = [];

    let currGuest = input.shift();

    while(currGuest !== 'PARTY') {
        const isVip = !isNaN(currGuest[0]);

        if(isVip) {
            vipGuests.push(currGuest)
        } else { 
            regularGuests.push(currGuest)
        }

        currGuest = input.shift();
    }

    let allGuests = vipGuests.concat(regularGuests);

    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }

    console.log(allGuests.length);
    allGuests.forEach(g => console.log(g));

}partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])