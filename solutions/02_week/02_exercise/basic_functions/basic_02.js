// Write the function multiply such that it returns the product (the result of multiplication) of a and b.


// sample usage - do not modify
console.log(multiply(2, 4));
console.log(multiply(3, 2));

//solution:

function multiply(a, b) {
    return console.log(a * b);
}
multiply(4, 5);


//or 

function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5));


or

const multiply = (a, b) => console.log(a * b); // not working

multiply(4,5);


// this works
function multiply(a, b) {
    return a * b;
}
let result = multiply(4, 5);
console.log(result);

