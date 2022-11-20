function theLift(input) {

    let peopleWaiting = Number(input.shift());

    let wagonsPlaces = input
    .shift()
    .split(' ')
    .map(x => Number(x));

    for (let i = 0; i < wagonsPlaces.length; i++) {

        if (wagonsPlaces[i] < 4) {
            if (peopleWaiting >= 4 - wagonsPlaces[i]) {
                peopleWaiting -= 4 - wagonsPlaces[i];
                wagonsPlaces[i] = 4;
            } else {
                wagonsPlaces[i] += peopleWaiting;
                peopleWaiting = 0;
            }
        }
    }

    let emptySpace = false;

    for (let i = 0; i < wagonsPlaces.length; i++) {
        let curr = wagonsPlaces[i];

        if (curr < 4) {
            emptySpace = true;
        }
    }

    if (!emptySpace && peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
    }
    
    if (emptySpace && peopleWaiting == 0){
        console.log("The lift has empty spots!");
    }

    console.log(wagonsPlaces.join(' '));

}theLift(["15","0 0 0 0 0" ])