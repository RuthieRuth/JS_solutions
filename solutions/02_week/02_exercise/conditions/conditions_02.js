/* Write a function named checkTemperature that takes a temperature as a parameter and returns "Cold" if the temperature is below 10, "Warm" if the temperature is between 10 and 25, and "Hot" if the temperature is above 25. */


// Sample usage - do not modify
console.log(checkTemperature(5));   // Outputs: "Cold"
console.log(checkTemperature(15));  // Outputs: "Warm"
console.log(checkTemperature(30));  // Outputs: "Hot"

//Solution
function checkTemperature(temp) {

    if (temp < 10) {
        console.log('cold');
    }
    else if (temp > 25) {
        console.log('hot');
    }
    else {
        console.log('warm');
    }
}
console.log(checkTemperature(8));