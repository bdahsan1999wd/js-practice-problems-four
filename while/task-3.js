// task-1: Sum of all (odd) numbers from 81 to 131

let num1 = 81;
let sumOdd = 0;

while (num1 <= 131) {
    if (num1 % 2 !== 0) {
        sumOdd += num1;
    }
    num1++;
}
console.log("Sum of odd numbers from 81 to 131 is:", sumOdd);

console.log('-------------------------');

// task-2: Sum of all (even) numbers from 206 to 311

let num2 = 206;
let sumEven = 0;

while (num2 <= 311) {
    if (num2 % 2 === 0) {
        sumEven += num2;
    }
    num2++;
}
console.log("Sum of even numbers from 206 to 311 is:", sumEven);