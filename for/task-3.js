// task-1: Sum of all (odd) numbers from 91 to 129

let sumOdd = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 !== 0) {
        sumOdd += i;
        // console.log(i);
    }
}
console.log("Sum of odd numbers from 91 to 129 is:", sumOdd);


console.log('------------------------------------');


// task-2: Sum of all (even) numbers from 51 to 85

let sumEven = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        sumEven += i;
        // console.log(i);
    }
}
console.log("Sum of even numbers from 51 to 85 is:", sumEven);