function add(num1, num2){
    var sum = num1 + num2;
    console.log(sum);
    console.log(num1, num2);
    return sum;
}
var total = add(100, 30);
console.log('Total:-', total);

/* -----------------------( Alt + Shift + A )------------------------ */

function beingSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    console.log('My money:-', money, 'Singara Price:-', singaraPrice);
    return quantity;
}
var myTaka = 200;
var singaras = beingSingara(myTaka);
console.log('Total Singaras:-', singaras);