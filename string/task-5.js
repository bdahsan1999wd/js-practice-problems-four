const text = "capitalize every first letter of each word in a String";

// Split the string into an array of words using space as separator
let words = text.split(' ');

// Initialize an empty string to store the final capitalized sentence
let result = '';

// Loop through each word in the array
for (let i = 0; i < words.length; i++) {
    // Get the current word
    let word = words[i];
    // console.log(word);

    // Extract first character and capitalize it
    let firstChar = word.charAt(0).toUpperCase();
    // console.log(firstChar);

    // Extract the rest of the word (from 2nd character to end)
    let remainingChars = word.slice(1);
    // console.log(remainingChars);

    // Combine capitalized first character with the remaining characters
    let capitalizedWord = firstChar + remainingChars;
    // console.log(capitalizedWord);

    // Add the capitalized word to the result string with a space
    let wordWithSpace = capitalizedWord + ' ';

    result = result + wordWithSpace;
    // console.log(result);
}

// Remove extra space from start/end and print the final result
let finalResult = result.trim();
console.log(finalResult);