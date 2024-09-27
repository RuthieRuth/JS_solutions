// Create a function named isEven that takes a number as a parameter and returns true if the number is even, and false if the number is odd.


// sample usage - do not modify
console.log(isEven(4)); // Returns true
console.log(isEven(7)); // Returns false

// Solution 
function isEven(number) {
    return number % 2 === 0;
}
let result = isEven(50);
console.log(result);


// not sure about these 2 below;
//or 

function isEven(number) {
    return number % 2 === 0; //even number, no reminder. === for comparison
}

// or
const isEven = (number) => number % 2 === 0;
