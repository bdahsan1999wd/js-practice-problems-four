// -------------------------For loop-------------------------

let total = 0;

for (let count = 1; ; count++) {
    total += count;

    // console.log(count);
    // console.log(total);

    let text1 = "Added: ";           // "Added: "
    let text2 = count;               // current count
    let text3 = ", Current Total: "; // ", Current Total: "
    let text4 = total;               // current total

    let finalResult = text1 + text2 + text3 + text4;

    console.log('for -', finalResult);

    // Alternative formats:----------
    // console.log(`Added: ${count}, Current Total: ${total}`);
    // console.log("Added: " + count + ", Current Total: " + total);

    if (total >= 100) {
        break;
    }
}
// console.log(total);


console.log('-------------------------------------');


// -------------------------While loop-------------------------

let sum = 0;
let number = 1;

while (true) {
    sum += number;

    // console.log(number);
    // console.log(sum);

    let text1 = "Added: ";         // "Added: "
    let text2 = number;            // current number
    let text3 = ", Current Sum: "; // ", Current Sum: "
    let text4 = sum;               // current sum

    let finalResult = text1 + text2 + text3 + text4;

    console.log('while -', finalResult);

    // Alternative formats:----------
    // console.log(`Added: ${number}, Current Sum: ${sum}`);
    // console.log("Added: " + number + ", Current Sum: " + sum);

    if (sum >= 100) {
        break;
    }

    number++;
}

// console.log(sum);