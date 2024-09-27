/* Write a function named getDayName that takes a number (1-7) as a parameter and returns the corresponding day of the week (1 for Monday, 2 for Tuesday, etc.). If the number is out of range, return "Invalid day". */



/*Sample usage - do not modify
console.log(getDayName(1));  // Outputs: "Monday"
console.log(getDayName(4));  // Outputs: "Thursday"
console.log(getDayName(8));  // Outputs: "Invalid day"

/* solution
function getDayName(number) {
    if (number <= 1 || number >= 7) {
        console.log('invalid day');
    }
    else if (number >= 1) {
        console.log('Monday');
    }
    else if ()
}
console.log(getDayName(2))



// solution 2
function getDayName(number);
returns







let getDayName = number;
switch (getDayName) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    default:
        console.log('invalid');
}
console.log(getDayName(2));






let dayofweek = 1;

if (dayofweek <= 7 && dayofweek >= 1) {
    console.log('its sunday');
} else if (dayofweek <= 6 && dayofweek >= 1) {
    console.log('its saturday');
} else if (dayofweek <= 5 && dayofweek >= 1) {
    console.log('its friday');
} else if (dayofweek <= 4 && dayofweek >= 1) {
    console.log('its thursday');
} else if (dayofweek <= 3 && dayofweek >= 1) {
    console.log('its wednesday');
} else if (dayofweek <= 2 && dayofweek >= 1) {
    console.log('its tuesday');
} else if (dayofweek <= 1 && dayofweek >= 1) {
    console.log('its monday');
} else {
    console.log('invalid');
}
*/


let dayofWeek = 1

switch (dayofWeek) {
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('tuesday');
        break
    case 3:
        console.log('wednesday');
        break
    case 4:
        console.log('thursday');
        break
    case 5:
        console.log('friday');
        break
    case 6:
        console.log('saturday');
        break
    case 7:
        console.log('sundday');
    default:
        console.log('invalid day');

} // console.log(dayofWeek(1)); works with an error



