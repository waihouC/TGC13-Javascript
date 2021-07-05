// Mapping
let words = ["one", "two", "three"];

let finalWords = [];
for (let w of words) {
    finalWords.push(w.toUpperCase());
}
console.log(finalWords);

// map creates new array and apply closure on array
let newWords = words.map(function(w) {
    return w.toUpperCase();
});
console.log(newWords);


// Filtering
let numbers = [99,10,25,11,23,24,26,77,13,5,8];

let evenNumbers = []; // initialise the evenNumbers to be an empty array
for (let n of numbers) {
    if (n % 2 == 0) {
        evenNumbers.push(n);
    }
}
console.log(evenNumbers);

let matches = numbers.filter(function(n) {
    return n % 2 == 0;  // condition to return to new array
});
// let matches2 = numbers.filter(n => n % 2 == 0);
console.log(matches);


// Reducing or Aggregate
let a = [3,4,5,1,2,39,10];
let sum = 0;
for (let n of a) {
    sum += n;
}
console.log(sum);


// params: current element of array, accumulated result
let reducer = (number, soFar) => {
    return soFar + number;
}

// params: reducer function, default or initial result (if array is empty)
let total = a.reduce(reducer, 0);
// let total2 = a.reduce((number, soFar) => soFar + number, 0);
console.log(total);

// Find max number
let someNumbers = [10, 20, 300, 50, 25, 30, ];
let maxNumber = someNumbers[0]; // start testing the first element
for (let n of someNumbers) {
    if (n > maxNumber) {
        maxNumber = n;
    }
}
console.log(maxNumber);


let findMax = (currentNumber, soFar) => {
    if (currentNumber > soFar) {
        return currentNumber;
    }
    else {
        return soFar;
    }
}
let largestNumber = someNumbers.reduce(findMax, someNumbers[0]);
// let largestNumber2 = someNumbers.reduce((currentNumber, soFar) => currentNumber > soFar ? currentNumber : soFar, someNumbers[0]);
console.log(largestNumber);