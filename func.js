const prompt = require('prompt-sync')();

function findExtension(filename) {
    let dotIndex = filename.indexOf('.');
    let ext = filename.slice(dotIndex+1);
    return ext;
}

let file = prompt("Enter filename: ");
console.log("The extension is", findExtension(file));