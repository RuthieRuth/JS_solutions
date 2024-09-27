/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

/*
conditions




function displayNumbers(params) {
    let inputNumbers;



    while (inputNumbers <= 10);
    console.log(inputNumbers)


    let inputNumbers = prompt('enter 10 different numbers');



}

bigandsmall();
*/


//Margit's soln
function myFunction() {
    let sum = 0;
    let smallest = Infinity;
    let biggest = -Infinity;
    let count = 10


    for (let counter = 0; counter < count; counter++) {   //count is also array.length; in original state

        let input = +prompt('Number');

        sum += input;

        if (input < smallest) {
            smallest = input;
        }

        if (input > biggest) {
            biggest = input;
        }
    }
    const average = sum / count;

    console.log(`sum of the numbers: ${sum}. Average of the numbers: ${average}. Smallest number: ${smallest}. Biggest number: ${biggest}.`);



}
myFunction()