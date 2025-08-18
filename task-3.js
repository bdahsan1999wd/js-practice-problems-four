var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// Initialize an empty string to store the result
let result = '';

// Loop through each element using for of
for (const name of numbers) {
    result += name;
}
console.log(result);





// --------------------for in loop--------------------

let names = ['Tom', 'Tim', 'Tin', 'Tik'];
let results = '';

for (const index in names) {
    results += names[index];
}
// console.log(results);



// --------------------While loop--------------------

// Initialize an empty string to store the result
let resultWhile = '';

let i = 0;

// Loop through each element using while
while (i < names.length) {
    resultWhile += names[i];
    i++;
}
// console.log(resultWhile);