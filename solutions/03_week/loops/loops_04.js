// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

/*prompt x20 Times
start with 3 prompts 
then return even numbers*/


function evenNumbers() {

    let evenCount = 0;

    for (i = 0; i < 20; i++) {
        let input = number(prompt('enter number'));

        if (submitNumber % 2 == 0) {
            evenCount++;
        }
        console.log('there was ' + evenCount + ' even numbers') //its under loops so it would be looped 20 times
    }
};
evenNumbers();




