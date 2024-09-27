// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.



function averageSpeed() {
    let distance, time;

    while (distance != 0) {    //!= not equal to 0
        distance = prompt('kilometers(in numbers)');

        if (distance == 0) {
            console.log('distance 0 - game over'); //what it needs to show
            break;
        }

        time = +prompt('time in hours (use numbers)'); // + turns it(string) into a number

        let average = distance / time;
        alert('average= ' + average)
        //or
        console.log('data', distance, time, average);
        //or
        console.log(average);
    }
}

averageSpeed();



