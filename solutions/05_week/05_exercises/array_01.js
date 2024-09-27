// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:
for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i]);
}

// Exercise 2: Remove the first member of the array.
// Write your code here:
teamMembers.shift();

// Exercise 3: Remove the last member of the array.
// Write your code here:
teamMembers.pop();

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
teamMembers.unshift('Alex');

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
teamMembers.push('Linda');

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
const newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers);

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
newTeamMembers.indexOf('Mike');

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
newTeamMembers.indexOf('Jake'); //it returns -1 cos hes not in the array.

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
newTeamMembers.splice(0, 1, 'Carol', 'Bruce');

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
const clonedNewTeamMembers = [...newTeamMembers]; // spread operator into a new array
clonedNewTeamMembers.push('Bob');
console.log(clonedNewTeamMembers);

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
const copy = clonedNewTeamMembers.slice();

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ['Tina', 'Dean'];
// Write your code here:
const combinedArrays = clonedNewTeamMembers.concat(newMembers);
console.log(combinedArrays);

// Exercise 13: Finding all occurrences of a John
// Write your code here:
let newbie = ['John', 'Alice', 'Ruthie', 'John'];
const filtered = newbie.filter((element) => element == 'John');
console.log(filtered);

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here: // for each can be used too

let inCaps = teamMembers.map(function (elements) {
    return elements.toUpperCase();
}
);
console.log(inCaps);