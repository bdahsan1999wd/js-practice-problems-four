const numbers = [12, 98, 5, 41, 23, 78, 46];

// ----------------------for Loop----------------------

// Create an empty array to store even numbers
const evenNumbers = [];

// Loop through each number in the array using for loop
for (let i = 0; i < numbers.length; i++) {

    // Check if the number is even
    if (numbers[i] % 2 === 0) {

        // Add it to the evenNumbers array
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);



// ----------------------While Loop----------------------

// Create an empty array to store even numbers
const evenNumbersWhile = [];

let i = 0;

// Loop through each number in the array using while loop
while (i < numbers.length) {

    // Check if the number is even
    if (numbers[i] % 2 === 0) {

        // Add it to the evenNumbersWhile array
        evenNumbersWhile.push(numbers[i]);
    }
    i++;
}
console.log(evenNumbersWhile);