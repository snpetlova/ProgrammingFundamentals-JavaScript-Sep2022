function schoolGrades(arr) {

    let students = {};

    for (let line of arr) {
        let studentsArray = line.split(' ');
        let studentName = studentsArray.shift();
        let gradesArr = studentsArray.map(x => Number(x));
        
        if (!students[studentName]) {
            students[studentName] = [];
        }
        students[studentName] = students[studentName].concat(gradesArr);
    }

    let studentsEntries = Object.entries(students);
    let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sortedStudents) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade;
        }

        let avgSum = sum / grades.length;
        console.log(`${name}: ${avgSum.toFixed(2)}`);
        
    }

}schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])