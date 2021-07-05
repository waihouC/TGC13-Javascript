const prompt = require('prompt-sync')();

let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");
let amt = prompt("Enter bill amount: ");

let letter = `
    Dear ${firstName} ${lastName},
        It has come to our attention that your bill of
        ${amt} is overdue.
        
        You will be charged a penalty of ${0.1 * amt}
        for late payment.
        
        Best regards,
        Customer Service`
console.log(letter);