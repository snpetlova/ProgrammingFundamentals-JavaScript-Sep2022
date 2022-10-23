function shootForTheWin(input) {

    let targets = input
    .shift()
    .split(' ')
    .map(x => Number(x));

    //let currIndex = input.shift();
    let counter = 0;

    for (const currentCommand of input) {
        if (currentCommand === "End") {
            console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
        }
    //Every time you receive an index, you need to shoot the target on that index, if it is possible. 
    //Every time you shoot a target, its value becomes -1, and it is considered shot.

    if (targets.length > currentCommand) {
        let currTarget = targets[currentCommand];
        
        for (const i in targets) {
           if (targets[i] != -1) {
            if (targets[i] > currTarget) {
                targets[i] -= currTarget;  //Reduce all the other targets, which have greater values than your current target, with its value.
            } else {
                targets[i] += currTarget; //Increase all the other targets, which have less than or equal value to the shot target, with its value 
            }
           }
        }

        targets[currentCommand] = -1;
        counter +=1;
    }  
    }
    
}shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
