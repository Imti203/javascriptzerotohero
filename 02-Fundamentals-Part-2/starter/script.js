
// Activating Strict Mode
'use strict';



// let hasDriversLicense = true;
// const passTest = true ;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////

// function logger() {
//     console.log('My name is Emtiaz');
// }
// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples ${oranges} oranges.`
//     return juice;
// }
// fruitProcessor(5, 0);
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

////////////////////////////////////////////////////////////////////////
// Function Declaration 
///////////////////////////////////////////////////////////////////////

// function calcAge(birthYear) {
//     return 2024 - birthYear;
// }
// const age1 = calcAge(1993);

///////////////////////////////////////////////////////////////////////
// Function Expression
/////////////////////////////////////////////////////////////////////// 

// const clacAge2 = function(birthYear) {
//     return 2030 - birthYear ;
// }
// const age2 = clacAge2(1993);
// console.log(age1, age2);

///////////////////////////////////////////////////////////////////////
// Arrow function
///////////////////////////////////////////////////////////////////////

// const calcAge3 = birthYear => 2037 - birthYear ;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
 
//     const age = 2040 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Emtiaz'));
// console.log(yearsUntilRetirement(1981, 'Shakil'));

///////////////////////////////////////////////////////////////////////
// Functions calling other function
///////////////////////////////////////////////////////////////////////

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} pieces of apple ${orangePieces} pieces of orange.`
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


///////////////////////////////////////////////////////////////////////
// Reviewing Functions
///////////////////////////////////////////////////////////////////////
// const calcAge = function (birthYear) {
//     return 2040 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else {
//         console.log(`${firstName} has already retired 🍟`);
//         return -1;  
//     }
// }
// console.log(yearsUntilRetirement(1993, `Emtiaz`));
// console.log(yearsUntilRetirement(1970, `Shakil`));


///////////////////////////////////////////////////////////////////////
// Coding challenge 01
///////////////////////////////////////////////////////////////////////
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


const calcAverage = (a, b, c) => (a+ b+ c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = fu, avgKoalasnction(avgDolhins) {
    if(avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🍟 (${avgDolhins} vs ${avgKoalas})`);
    }else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win 🍟 (${avgKoalas} vs ${avgDolhins})`);
    }else{
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);


