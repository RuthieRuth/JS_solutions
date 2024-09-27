// Write a function named findMax that takes three numbers as parameters and returns the largest of the three.


// sample usage - do not modify
console.log(findMax(3, 7, 2)); // Returns 7
console.log(findMax(10, 5, 15)); // Returns 15

// my Solution
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
let result = findMax(39, 98, 2)
console.log(result);


// solution from the question
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log(findMax(3, 7, 2)); //returns 7


// or with arrow function
const findMax = (num1, num2, num3) => Math.max(num1, num2, num3)
//both const and let can use arrow functions. Also findMax only remembers the old data. You have to change it before running it again.
console.log(findMax(30, 9, 98)); //returns 7


