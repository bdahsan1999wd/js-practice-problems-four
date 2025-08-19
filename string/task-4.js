const inputText = "Extra fun example XXYYZZ.";

// Check if lowercase x exists
if (inputText.includes('x')) {
    console.log("Lowercase 'x' found in the string.");
}

// Check if uppercase X exists
if (inputText.includes('X')) {
    console.log("Uppercase 'X' found in the string.");
}

// Replace lowercase x with y
let updatedText = inputText.split('x').join('y');
console.log(updatedText);

// Replace uppercase X with Y
updatedText = updatedText.split('X').join('Y');

console.log(updatedText);