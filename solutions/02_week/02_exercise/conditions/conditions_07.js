/* Write a function named isInRange that takes a number as a parameter, and returns true if the number is between 10 and 20 (inclusive), and false otherwise. */


// Sample usage - do not modify

console.log(isInRange(15));  // Outputs: true
console.log(isInRange(5));   // Outputs: false
console.log(isInRange(20));  // Outputs: true




//solution
function isInRange(number) {
    if (20 >= number && number >= 10) {
        console.log('true');
    } else {
        console.log('false');

    }
} console.log(isInRange(5));
