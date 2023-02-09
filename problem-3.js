function make_avg(array) {
    let avgNumber = 0;
    for (let i = 0; i < array.length; i++) {
        avgNumber += array[i];
    }
    return avgNumber / array.length;
}
const numberArray = [12, 13, 14, 15, 16];
const averageOfAnArray = make_avg(numberArray);
console.log(averageOfAnArray);