//Write a function that manages meeting appointments. The input comes as an array of strings. 
//Each string contains a weekday and person’s name. For each successful meeting, print a message. 
//If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
//In the end, print a list of all successful meetings

function meetings(arr) {

    let meetings = {};

    for (line of arr) {
        let [day, name] = line.split(' ');

        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }

} meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])