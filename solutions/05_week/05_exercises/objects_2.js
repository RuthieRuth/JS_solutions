/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`. 
Add at least two book objects to this collection.
*/

/* check ways to make an array either literal or constructor*/

let library = [
    {
        title: 'Moby Dick',
        author: 'Herman',
        yearPublisehed: 1851,
    },
    {
        title: 'Hamlet',
        author: 'Shakespear',
        yearPublished: 1653,
    }
];

console.log(library);


/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/
library[1].yearPublished = 1650;

console.log(library[0].title);
console.log(library[1].yearPublished);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

library[0].genres = 'Classics';
library['isAvailable'] = true;    //??????

console.log(library);   //how to console.log all objects and arrays

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

function book(title, author, yearPublisehed, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = this.yearPublished;
}

console.log(library);


/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

function createBook(title, author, yearPublished, genres) {
    const book = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres
    };
    return book;
}

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const jsonString = JSON.stringify(library);
const jsonObject = JSON.parse(jsonString);