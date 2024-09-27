// Write a function named greetUser that takes a user's name as a parameter and returns a greeting message.

// sample usage - do not modify
console.log(greetUser("Alice")); // Returns "Hello, Alice!"
console.log(greetUser("Bob")); // Returns "Hello, Bob!"


//  **   to get the user from the user is: 
//       let userName = prompt("Please enter your name:");


//SOLUTIONS

// my solution
function greetUser(user) {
    return 'Hello,' + user + '!';
}
let greeting = greetUser('Ruth',);
console.log(greeting);


//or

function greetUser(user) {
    return console.log('Hello,' + user + '!');
}

greetUser('Ruth');

//or ??
return `Hello, ${user}!`;

// or  ...with arrow function
const greetUser = (user) => console.log(`Hello, ${user}!`);
greetUser('Ruth');









