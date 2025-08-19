// --------------------for loop--------------------

const text = "Education";
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Convert the original text to lowercase for case-insensitive checking
const lowerText = text.toLowerCase();
// console.log(lowerText);

// Initialize allVowelsFound as true initially
let allVowelsFound = true;

// Loop through each vowel in the vowels array
for (let i = 0; i < vowels.length; i++) {

    // Get the current vowel to check
    let currentVowel = vowels[i];
    // console.log(currentVowel);

    // Check if this vowel is not present in the lowercased text
    if (!lowerText.includes(currentVowel)) {
        // If vowel is missing, set flag to false
        allVowelsFound = false;
        break;
    }
    // console.log(currentVowel, allVowelsFound);
}
console.log(allVowelsFound);


console.log('-------------');


// --------------------while loop--------------------

const txt = "Education";
const vow = ['a', 'e', 'i', 'o', 'u'];

// Convert the text to lowercase for case-insensitive comparison
const lowTxt = txt.toLowerCase();
// console.log(lowTxt);

// Assume all vowels are found initially
let foundAll = true;

// Loop through each vowel and check if it's present in the lowercase text
for (let idx = 0; idx < vow.length; idx++) {

    // Get the current vowel to check
    let ch = vow[idx];
    // console.log(ch);

    // If the vowel is not present, update flag and break loop
    if (!lowTxt.includes(ch)) {
        foundAll = false;
        break;
    }
    // console.log(ch, foundAll);
}
console.log(foundAll);