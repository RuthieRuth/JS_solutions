// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.


function name() {

    let initialNumber;

    let userChoice = prompt('do you wish to continue giving numbers')

    if (userChoice == 'Yes') {
        userChoice = prompt('okay, input another number')

    } else {
        console.log('no is your choice')
    }

    initialNumber = prompt('input a single number')
    console.log('do you wish to continue giving numbers')

}


// Teachers soln below:  confirm can also be used but its confusing 

// Margit's soln
function averageNumbers() {
    let sum = 0;
    let count = 0;


    while (true) {
        let input = +prompt('Enter a number')
        sum += input;
        count++;


        let shouldContinue = prompt('do you want want to continue?  (y/n)');

        if (shouldContinue === 'n') {
            break;
        }
    }
    let average = sum / count;
    console.log(average);

}

averageNumbers()