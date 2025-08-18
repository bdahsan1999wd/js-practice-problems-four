// Find all the (odd) numbers from 61 to 100.

let num1 = 61;

while (num1 <= 100) {
    if (num1 % 2 !== 0) {
        console.log('odd:', num1);
    }
    num1++;
}


console.log('---------------------------------');


// Find all the (even) numbers from 78 to 98.

let num2 = 78;

while (num2 <= 98) {
    if (num2 % 2 === 0) {
        console.log('even:', num2);
    }
    num2++;
}