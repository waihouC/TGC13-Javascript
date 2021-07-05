let primes = [1,3,5,7,9,11,13];
console.log(primes);
// ... = spread array, separate array elements with ,
console.log(...primes);
// => console.log(1,3,5,7,9,11,13);

let a = [1,2,3,4,5];
let b = ['a','b','c','d','e'];
let c = [...a,...b];
console.log(c);

// assign by value: primitive data type
a = 3;
b = a;

function addDurian(list) {
    list.push("durian");
}

let fruits = ["apples", "bananas", "oranges"];
// let another = fruits; // assign by reference -> fruits is complex data type
let another = [...fruits]; // spread can be used to clone an array
another[0] = -99;
console.log(fruits);
console.log(another);

addDurian(fruits);