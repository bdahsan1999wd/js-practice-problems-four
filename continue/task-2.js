// for---------------
for (let i = 55; i <= 85; i++) {
    if (i % 2 === 0) {
        continue;   // Skip even numbers
    }
    if (i % 5 === 0) {
        continue;   // Skip numbers divisible by 5
    }
    console.log('for:', i);
}


console.log('-----------------------');


// while loop---------------
let i = 55;

while (i <= 85) {
    if (i % 2 === 0) {
        i++;
        continue;   // Skip even numbers
    }
    if (i % 5 === 0) {
        i++;
        continue;   // Skip numbers divisible by 5
    }
    console.log('while:', i);
    i++;
}