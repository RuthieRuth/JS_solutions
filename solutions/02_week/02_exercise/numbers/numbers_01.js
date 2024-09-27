// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

function convertNumberToString(number) {

}

function convertStringToNumber(string) {

}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertStringToNumber('42')); // 42
console.log(convertStringToNumber('97')); // 97
console.log(convertStringToNumber('11')); // 11


//proper soln: a function convertNumberToString

function convertNumberToString(number) {

    let x = number.toString();
    console.log(number); // if I want to print it separately, if not ignore
    console.log(typeof number); // if I want to priint separately, if not ignore
    return x;
}
convertNumberToString(321);

// or
const convertNumberToString = (string) => parseInt(string);
return +string

// proper soln: a function convertStringToNumber

function convertStringToNumber(string) {

    let x = parseInt(string);
    return x;
    return +string
}
convertStringToNumber('123');

//or 

