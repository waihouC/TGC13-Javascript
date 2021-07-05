// strings are sequence of characters btw quotes
let sentence = "she sells seashells by the seashore";

// don't mix starting and ending quotes
// let dunwork = 'hello";

// ok to embed single quote in double quote strings
let story = "She said she didn't sell any seashells";

// ok to embed double quote in single quote strings
let story2 = 'She said: "I sold some seashells"';

// escape sequence\character: to convert special characters as literals
let story3 = 'She said: "I didn\'t sell any seashells"';

console.log(story3);

let beginning = "It was\nthe best\nof time";
console.log(beginning);

console.log("tab\n\ttab");

console.log("c:\\test");

// backtick string (`)
let longstring = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.`;
console.log(longstring);