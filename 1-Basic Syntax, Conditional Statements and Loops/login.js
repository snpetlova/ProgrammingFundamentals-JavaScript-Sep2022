function solve (input) {
let username = input.shift();
let password = username.split('').reverse().join('');

let counter = 0;

let currPassword = input.shift();

while (currPassword !== password && counter <3) {
    counter++;
    console.log("Incorrect password. Try again.");
    currPassword = input.shift();
}

if (currPassword === password) {
    console.log(`User ${username} logged in.`);
} else {
    console.log(`User ${username} blocked!`);
}
} 
solve(['momo','omom'])