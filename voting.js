const prompt = require('prompt-sync')();

let age = parseInt(prompt("Please enter your age: "));
let citizen = prompt("Are you a Singapore citizen? (Y/N) ");
let dq = prompt("Have you been disqualified as an elector? (Y/N) ");

if (age >= 21 && citizen == "Y" && dq == "N") {
    console.log("You are eligible for voting.");
}
else {
    // optional
    console.log("You are not eligible for voting.");
}