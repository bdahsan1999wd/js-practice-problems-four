function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const myAverage = getAverage(60, 58, 59);
console.log('My average:-', myAverage);