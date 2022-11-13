function schoolRegister(arr) {

    let register = {};

    for (let line of arr) {
        let lineSeparated = line.split(' ');
        let studentName = lineSeparated[2].slice(0, lineSeparated[2].length - 1);
        let grade = lineSeparated[4].slice(0, lineSeparated[4].length - 1);
        let avgScore = Number(lineSeparated[lineSeparated.length-1]);
        
        if (avgScore >= 3) {
            if (!register.hasOwnProperty(grade)) {
                register[grade] = {
                    name: [studentName],
                    average: [avgScore]
                };
            } else {
                register[grade].name.push(studentName);
                register[grade].average.push(avgScore)
            }
        }
    }

    for (const stGrade in register) {
        const student = register[stGrade]
        const avg = student.average.reduce((a,b) => a + b) / student.average.length;

       console.log(`${Number(stGrade) + 1} Grade`);
       console.log(`List of students: ${student.name.join(', ')}`);
       console.log(`Average annual score from last year: ${avg.toFixed(2)}`);
       console.log(" "); 
    }

}schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ])