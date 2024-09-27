/* Write a function named secretWordGame that takes a word as a parameter and returns a special message based on the following conditions:

If the word is "JavaScript", return "You found the secret word!".
If the word starts with the letter "J", return "You're close, but not quite!".
If the word ends with the letter "t", return "Almost there!".
If the word contains the letter "e" anywhere, return "Good guess, but not the secret word!".
For any other word, return "Keep trying!".
*/


/*
// Sample usage - do not modify
console.log(secretWordGame("JavaScript"));  // Outputs: "You found the secret word!"
console.log(secretWordGame("Java"));        // Outputs: "You're close, but not quite!"
console.log(secretWordGame("Cat"));         // Outputs: "Almost there!"
console.log(secretWordGame("Elephant"));    // Outputs: "Good guess, but not the secret word!"
console.log(secretWordGame("Dog"));         // Outputs: "Keep trying!"

*/



// solution


function secretWordGame(word) {

    if (word === "javascript") {
        return "you found the secret word";
    }
    else if (word.charAt(0) == "j") {
        return "you are close";
    }
    else if (word.charAt(word.length - 1) == "t") {
        return "almost there";
    }
    else if (word.includes("e")) {
        return "good guess, but not the secret word"
    } else {
        return "keep trying"
    }
}

console.log(secretWordGame(java));






