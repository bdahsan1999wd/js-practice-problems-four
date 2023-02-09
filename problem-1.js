// function foo(){
// }
// var output = bar();
// console.log(output);

// function bar(){
// }
// var output = foo();
// console.log(output);

/* -----------------correct way---------------- */

function foo(){
    console.log('foo');
}
bar();

function bar(){
    console.log('bar');
}
foo();