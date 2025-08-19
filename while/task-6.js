// ---------- Calculate the sum of numbers from 1 to n ----------


/* -----------------summation (using while loop)------------------ */

let n = 5;
let sum1 = 0;

let i = 1;
while (i <= n) {
    // console.log(i);
    sum1 = sum1 + i;
    i++;
}
console.log('sum1:', sum1);

console.log('------------');

/* ----------------other way (Triangular Number Formula) --------------------- */

let sum2 = (n * (n + 1)) / 2;
console.log('sum2:', sum2);