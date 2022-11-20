function reception(input) {

    let firstEmployeeEff = Number(input[0]);
    let secondEmployeeEff = Number(input[1]);
    let thirdEmployeeEff = Number(input[2]);
    let totalStudents = Number(input[3]);

    let hours = 0;
    let answeredForHour = firstEmployeeEff + secondEmployeeEff + thirdEmployeeEff;

    while (totalStudents > 0) {
        totalStudents -= answeredForHour;
        hours++;

        if (hours % 4 === 0) {
            hours++;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}reception(['5','6','4','20'])