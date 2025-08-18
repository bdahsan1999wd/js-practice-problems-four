let number = 9;

let i = 1;

while (i <= 10) {

    let result = number * i;
    // console.log(result);

    let text1 = number;      // 9
    let text2 = " x ";       // " x "
    let text3 = i;           // 1, 2, 3 ...
    let text4 = " = ";       // " = "
    let text5 = result;      // result

    let finalResultText = text1 + text2 + text3 + text4 + text5;

    console.log(finalResultText);

    // Alternative formats:----------
    // console.log(number + ' x ' + i + ' = ' + (number * i));
    // console.log(`${number} x ${i} = ${number * i}`);

    i++;
}