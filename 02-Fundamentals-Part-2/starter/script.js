/*
// Activating Strict Mode
'use strict';

let hasDriversLicense = true;
const passTest = true ;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


// Functions

function logger() {
    console.log('My name is Emtiaz');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples ${oranges} oranges.`
    return juice;
}
fruitProcessor(5, 0);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declaration 

function calcAge(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge(1993);

// Function Expression
const clacAge2 = function(birthYear) {
    return 2030 - birthYear ;
}
const age2 = clacAge2(1993);
console.log(age1, age2);
*/

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear ;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
 
    const age = 2040 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Emtiaz'));
console.log(yearsUntilRetirement(1981, 'Shakil'));