function movingTarget(input) {

    let targets = input
        .shift()
        .split(' ')
        .map(x => Number(x));

    let currLine = input.shift();

    while (currLine !== "End") {
        let line = currLine.split(' ');
        let command = line[0];
        let firstIndex = Number(line[1]);
        let secondIndex = Number(line[2]);

        switch (command) {
            case "Shoot":
                //Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
                //Remove the target if it is shot. A target is considered shot when its value reaches 0.
                if (targets[firstIndex]) {
                    targets[firstIndex] -= secondIndex;
                }

                if (targets[firstIndex] <= 0) {
                    targets.splice(firstIndex, 1)
                }
                break;

            case "Add":
                //Insert a target with the received value at the received index if it exists. 
                //If not, print: "Invalid placement!"
                if (targets[firstIndex]) {
                    targets.splice(firstIndex, 0, secondIndex)
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case "Strike":
                //Remove the target at the given index and the ones before and after it depending on the radius.
                //If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
                let radius = secondIndex;
                let back = firstIndex - radius;
                let forth = firstIndex + radius;

                if (targets[back] && targets[forth]) {
                    targets.splice(back, radius * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }

        currLine = input.shift();
    }

    console.log(targets.join('|'));

} movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
