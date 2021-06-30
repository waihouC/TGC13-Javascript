// loan = 10,000
// interest rate = 2%
// monthly payment = 500
// how long does it take to repay in months?

let loan = 10000;
let repay = 500;
let interest = 0.02;
let noOfMonths = 0;

while (loan > 0) {
    loan += loan * interest;

    loan -= repay;

    noOfMonths++;
}

console.log("Number of months to repay loan =", noOfMonths);