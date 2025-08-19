// --------------------for loop--------------------

const text = "BanglAdesh";

// Initialize counter for counting 'a' or 'A'
let count = 0;

for (let i = 0; i < text.length; i++) {

    // Get the current character
    let currentChar = text[i];
    // console.log(currentChar);

    // Convert the current character to lowercase
    let lowerChar = currentChar.toLowerCase();
    // console.log(lowerChar);

    // Check if the character is 'a'
    if (lowerChar === 'a') {
        // Increase the count by 1
        count++;
    }
}
console.log(count);


console.log('-----------');

// --------------------while loop--------------------

const text2 = "BanaanAAA";

// Initialize counter for counting 'a' or 'A'
let count2 = 0;

let i = 0;

while (i < text2.length) {

    // Get the current character
    let currentChar = text2[i];
    // console.log(currentChar);

    // Convert the current character to lowercase
    let lowerChar = currentChar.toLowerCase();
    // console.log(lowerChar);

    // Check if the character is 'a'
    if (lowerChar === 'a') {
        // Increase the count by 1
        count2++;
    }
    // Increment index to move to the next character
    i++;
}
console.log(count2);