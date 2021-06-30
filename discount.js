// kids and elderly get 5% discount
// if age below 10 yo and is 60 yr and above
const prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your age: "));
let bill = parseFloat(prompt("Enter your bill: "));
let discount = 0;

if (age < 10 || age >= 60){
    console.log("You are eligible for discount.");
    discount = bill * 0.05;
    bill = bill - discount;     
}
else {
    console.log("You are not eligible for discount.");
}

console.log("Your discount is", discount);
console.log("Your total bill is", bill);

