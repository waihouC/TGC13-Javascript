// include prompt-sync ('yarn add prompt-sync')
const prompt = require('prompt-sync')();

let weight = prompt("Please enter your weight: ");
let height = prompt("Please enter your height: ");
let bmi = weight / height**2;
console.log("Your BMI is: ", bmi);