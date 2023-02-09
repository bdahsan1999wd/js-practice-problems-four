function make_avg(num1, num2, num3){
    const total = num1 + num2 + num3;
    const average = total / 3;
    return average;
}
const averageValues = make_avg(1, 2, 3);
console.log('Average Number:-', averageValues);