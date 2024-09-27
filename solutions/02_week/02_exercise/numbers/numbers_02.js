// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.


// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"



// soln 1
function convertFtoC(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  console.log(celsius);
  return celsius = Math.round(celsius);
}
convertFtoC(80);


let fahrenheit = 80;
let celsiusTempreture = convertFtoC(fahrenheit);


