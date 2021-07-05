let fruits = ["watermelon", "apple", "orange", "banana", "pear"];
// sort in ascending
console.log(fruits.sort());

// closure function inside sort
// e.g: https://www.w3schools.com/jsref/jsref_sort.asp
let numbers = [90, 80, 8, 9, 10, 11, 1, 2, 3 ,4, 40];
numbers.sort(function(a, b){
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(numbers);

// anonymous function
// version 1:
let f = (x, y) => {
    return x + y;
}

// version 2:
// only if returning a one-liner code
let f2 = (x, y) => x + y;

// () can be ommitted if there is only ONE arg
let areaOfCircle = r => 3.14*r**2;