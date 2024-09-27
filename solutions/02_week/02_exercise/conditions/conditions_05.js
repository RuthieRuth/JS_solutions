/**
Write a function named gradeChecker that takes a number (representing a student's grade) as a parameter and returns a grade classification as follows:

"A" for grades 90 and above
"B" for grades 80-89
"C" for grades 70-79
"D" for grades 60-69
"F" for grades below 60
*/


// Sample usage - do not modify
console.log(gradeChecker(95)); // Outputs: "A"
console.log(gradeChecker(85)); // Outputs: "B"
console.log(gradeChecker(75)); // Outputs: "C"
console.log(gradeChecker(65)); // Outputs: "D"
console.log(gradeChecker(55)); // Outputs: "F"


//solution
function gradeChecker(grade) {

    if (grade < 60) {
        console.log('E');
    } else if (grade <= 69) {
        console.log('D');
    } else if (grade <= 79) {
        console.log('C');
    } else if (grade <= 89) {
        console.log('B');
    } else console.log('A')
}
console.log(gradeChecker(50));


