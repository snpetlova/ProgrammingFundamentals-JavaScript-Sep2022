function counterStrike(input) {

    let energy = Number(input.shift());
    let counter = 0
    
    for (const command of input) {
        if (command !== "End of battle") {
            let distance = Number(command);

            if (energy - distance < 0) {
                console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
                return; 
            }

            energy -= distance;
            counter++;
        } else {
            console.log(`Won battles: ${counter}. Energy left: ${energy}`);
        }

        if (counter % 3 === 0) {
            energy += counter;
        }  
    } 
}counterStrike(["100","10","10","10","1","2","3","73","10"])

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
