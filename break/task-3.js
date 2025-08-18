// -------------------------For loop-------------------------

for (let i = 2; i <= 100; i++) {
    let root = Math.sqrt(i);

    // console.log(i);
    // console.log(root);

    let text1 = "Current number: ";  // static text
    let text2 = i;                   // current number
    let text3 = ", Square root: ";   // static text
    let text4 = root;                // square root value

    let message = text1 + text2 + text3 + text4;

    // console.log(message);

    // Alternative formats:----------
    // console.log(`Current number: ${i}, Square root: ${root}`);
    // console.log("Current number: " + i + ", Square root: " + root);

    if (root === Math.floor(root)) {
        console.log("for: Square number found: " + i);
        break;
    }
}


console.log('----------------------------------');


// -------------------------While loop-------------------------

let num = 1;

while (num <= 100) {
    let root = Math.sqrt(num);

    // console.log(num);
    // console.log(root);

    let text1 = "Current number: ";  // static text
    let text2 = num;                 // current number
    let text3 = ", Square root: ";   // static text
    let text4 = root;                // square root value

    let message = text1 + text2 + text3 + text4;

    // console.log(message);

    // Alternative formats:----------
    // console.log(`Current number: ${num}, Square root: ${root}`);
    // console.log("Current number: " + num + ", Square root: " + root);

    if (root === Math.floor(root)) {
        console.log("while: Square number found: " + num);
        break;
    }

    num++;
}