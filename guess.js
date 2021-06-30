const prompt = require('prompt-sync')();

// random gives 0 - 1
let ans = Math.floor(Math.random() * 20);

// update with while loop
let i = 0;

while (i < 3) {
    let guess = parseInt(prompt("Enter the correct answer: "));

    if (guess == ans) {
        console.log("You have guessed the number correctly.");
        break;
    }
    else if (guess > ans) {
        console.log("Too warm.");
    }
    else {
        console.log("Too cool.");
    }

    i++;
}


console.log("The correct number is", ans);