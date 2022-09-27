function solve(numPages, readPagesInHour, days) {
    let totalTime = numPages / readPagesInHour;
    let hPerDay = totalTime / days;
    console.log(hPerDay);
}solve(212,20,2)