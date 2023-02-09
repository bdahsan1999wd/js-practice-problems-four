function odd_even(number){
    if (number % 2 === 0){
        return 'even';
    }
    else {
        return 'odd';
    }
}
const result = odd_even(10);
console.log(result);