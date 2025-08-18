const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors);

// -------------------- using  .reverse()  method --------------------
// colors.reverse();
// console.log(colors);


// -------------------- using  .push()  method --------------------

// Create a new empty array to store the reversed result
const reversedColors = [];

// Loop through the original array from the last element to the first
for (let i = colors.length - 1; i >= 0; i--) {

    // Add each element to the new array
    reversedColors.push(colors[i]);
}
console.log(reversedColors);