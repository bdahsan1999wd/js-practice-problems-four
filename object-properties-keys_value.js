var shoppingCart = {
    books: 50,
    sunglass: 30,
    keyboard: 20,
    mouse: 50,
    pen: 40  
}
console.log(shoppingCart);

/* ------------------------------------Get Object Property/keys Value----------------------------------- */

// (1) when know the specific property name, use . dot notation to get the property value.
var penCount = shoppingCart.pen;
// console.log(penCount);

// (2) when know the specific property name, use [] to get the property value.
var penCount2 = shoppingCart['mouse'];
// console.log(penCount2);

// (3) 
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyValue);

/* -------------------------------------Set Object Property/keys Value------------------------------------ */

// (1) set Object property/keys values...
shoppingCart.mouse = 100;
console.log(shoppingCart);

// (2) set Object property/keys values...
shoppingCart['pen'] =100;
console.log(shoppingCart);

// (3) set Object property/keys values...
var propertyName = 'sunglass';
shoppingCart[propertyName] = 300;
console.log(shoppingCart);

// -----------------------------------------------------
var properties = Object.keys(shoppingCart);
// console.log(properties);

// -----------------------------------------------------
var properties = Object.values(shoppingCart);
// console.log(properties);