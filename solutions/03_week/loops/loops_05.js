// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.


function average() {
    let input;
    let count = 0; // numbers or values to be entered into pc starting from 0
    let inputTotal = 0; // total of numbers entered starting from 0

    // loops containing the if condition
    while (input != 0) {                        //LOOP
        input = prompt('enter a number');

        if (input == 0) {                      //CONDITION
            console.log('terminate');
            break;
        }
        inputTotal += input;                   // the number are totalled
        count++                                // the total of numbers ie the entered numbers
    }

    let displayAnswer = inputTotal / count;
    console.log(displayAnswer);
}

average();

// teachers soln

function calcAverage() {
    let sum = 0;
    let count = 0;

    do {
        let input = +prompt('enter number (enter 0 to terminate):'); // + or parseInt or parseFloat to turn string to number
        if (input !== 0) {
            sum += input;
            count += 1;
        }
    }
    while (input !== 0);

    let average = sum / count;
    console.log(average);  // or (sum/count); therefore ignoring previous line

}
calcAverage()