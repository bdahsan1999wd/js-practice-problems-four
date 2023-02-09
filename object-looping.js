// var shoppingCart = {
//     books: 50,
//     keyboard: 20,
//     mouse: 50,
//     pen: 40,
//     shoes: 5,
//     bottle: 6
// }

// console.log(shoppingCart);

const propsName = Object.keys(shoppingCart);
// console.log(propsName);

const propsValue = Object.values(shoppingCart);
// console.log(propsValue);

// --------------------------object for looping-----------------------------

var shoppingCart = {
    books: 50,
    keyboard: 20,
    mouse: 50,
    pen: 40,
    shoes: 5,
    bottle: 6
}

// var propsName = [ 'books', 'keyboard', 'mouse', 'pen', 'shoes', 'bottle' ];

for (var i = 0; i < propsName.length; i++){
    // console.log(propsName[i]);
    // console.log(propsValue[i]);
    
    var propertyName = propsName[i];
    // console.log(propertyName);

    var propertyValue = shoppingCart[propertyName];
    console.log(propertyValue);
 }

// ---------Other way----------
// -------------------------for in loop----------------------

for(var propertyName in shoppingCart){
    // console.log(propertyName);

    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyValue);
}