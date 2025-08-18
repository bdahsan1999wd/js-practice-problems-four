// for loop--------------------
for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        continue;   // Skip odd numbers
    }
    console.log(i);
}


console.log('--------------------------');

// while loop--------------------
let i = 1;

while (i <= 40) {
    if (i % 2 !== 0) {
        i++;
        continue;   // Skip odd numbers
    }
    console.log(i);
    i++;
}