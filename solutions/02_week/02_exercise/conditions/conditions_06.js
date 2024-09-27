/*
Write a function named pluralize that:

- Accepts two arguments: a noun (string) and a number (integer).
- Returns a string combining the number and the appropriately pluralized form of the noun. The function should add an "s" to the noun if the number is not 1, such as "5 cats" or "1 dog".
 */


// Sample usage - do not modify
console.log(pluralize("cat", 5));  // Outputs: "5 cats"
console.log(pluralize("dog", 1));  // Outputs: "1 dog"
console.log(pluralize("bird", 0)); // Outputs: "0 birds"
console.log(pluralize("apple", 2)); // Outputs: "2 apples"


// solution
function pluralize(noun, number) {  // or function pluralize(number, noun)
    if (number > 1 || number == 0) {
        return number + ' ' + noun + 's'; // 'cos its supposed to be number(5), noun(snakes). therefore, what you want to return, arrange accordingly. 
    }
    else {
        return number + ' ' + noun;
    }
}
console.log(pluralize('snake', 5));