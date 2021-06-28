const prompt = require('prompt-sync')();

// define a function
function sayHello() {
    console.log("Hello");
}

function calcAreaOfCircle(radius) {
    return 3.14 * radius**2;
}

function calcNetBill(bill, gstPercent, svcPercent) {
    let gst = gstPercent / 100 * bill;
    let svc = svcPercent / 100 * bill;
    let total = bill + gst + svc;
    return total;
}

// to call a function
sayHello();

let area = calcAreaOfCircle(5);
console.log("Area of circle with radius 5 is", area)

let bill = parseFloat(prompt("Please enter the bill: "));
let gstPercent = parseFloat(prompt("Please enter the GST %: "));
let svcPercent = parseFloat(prompt("Please enter the service charge %: "));
let total = calcNetBill(bill, gstPercent, svcPercent);
console.log("The total bill is", total);
