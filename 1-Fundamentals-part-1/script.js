/*
// values and variables


let js="amazing";
console.log(js);

console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log(23);

let firstName = "Matilada";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let jonas_matilada = "JM";
let $function = 27;

let person = "jonas";
let PI =3.1416;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstjob);


               // Data Type//

// boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);

// number and string
console.log(typeof 23);
console.log(typeof 'jishan');

// boolean to string
javascriptIsFun = 'YES!'; // don't use 'let' when we use same variable for the next times.
console.log(typeof javascriptIsFun);

// undefined
let year;
console.log(year);
console.log(typeof year);

//number
year= 1991;
console.log(typeof year);

// null
console.log(typeof null);


       // let , const , var //


let age = 30;
age = 31;
console.log(age);

const birthYear = 1991;
//birthYear = 1990;  it doesn't work because of without const thae variables doesn't work.
//const job;   without values const doesn't work.

var job= 'Programmer';
job = 'teacher';
console.log(job); // we never use var although 'var' ande 'let' are same but not always .var is old.

lastName = 'pasha';
console.log(lastName); // but we never write like this ;


    //   Basic Operators//

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Javascript';
const lastName = 'Fundamentals';
console.log(firstName + ' ' + lastName);

// Assignment operators
  let x =10+5;  // 15
  x += 10 ; // x = x + 10 = 25
  x*=4 ; // x = x * 4 = 100
  x++ ; // x = x + 1
  x-- ; // x = x - 1
  x-- ; // x = x - 1
  console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah <= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);



// Operators Precedence 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge); 


              //  Coding challenge #1//


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


// Test Data 1

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn= massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Test Data 2

const massMarkV = 95;
const massJohnV = 85;
const heightMarkV = 1.88;
const heightJohnV = 1.76;

const BMIMarkV = massMarkV / heightMarkV ** 2;
const BMIJohnV= massJohnV / (heightJohnV * heightJohnV );

const markHigherBMIV = BMIMarkV > BMIJohnV ;

console.log(BMIMarkV, BMIJohnV, markHigherBMIV);


           //  Strings and Templet literals//

const firstName = 'Jonas';
const job = 'teacher';
const year = 2037;
const birthYear = 1991;

const jonas = "I'm " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
console.log (jonas);

const jonasNew = `I'm ${firstName} , a ${year - birthYear} year old ${job}!`
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('String with \n\ multiple \n\ lines');

console.log(`String with
 multiple
  lines`);
  

          // Taking decisions if else statements//
          
const age = 15;
if (age>=18) {
  console.log (`Sarah can strat driving license.`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young.Wait another ${yearLeft} years :)`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
}else {
  century = 21;
}
console.log(century);


      // coding challenge #2//

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn= massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
   console.log(`John's BMI is higher than Mark's!`);
}

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
} else {
   console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}


           // Type Conversion and Coercion //

// Type Conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);// String to Number convert
console.log(Number(inputYear) + 18);

console.log(Number('Jishan'));
console.log(typeof NaN);

console.log(String(23), 23); // Number to String convert

//  Type Coercion
console.log('I am ' + 23 + ' years old'); // '+' operator changes from Number to String
console.log('23' - '10' - 3);           // '-' operator changes from String to Number
console.log('23' / '2');              // '/' operator changes from String to Number
console.log('23' > '18');           // '>' operator changes from String to Number
console.log('23' * '2');          // '*' operator changes from String to Number 

let n = '1' + 1; // '11'
n = n - 1;   // 11 - 1 Beacause of '-' operator changes from String to Number
console.log(n);


                // Equality Operators == vs ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); // '18' not equal 18

if (age == 18) console.log('You just became an adult :D (loose)');// '18' = 18

const luckyNumber = prompt("What's your favourite number");
console.log(luckyNumber);
console.log(typeof luckyNumber);

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number`);
}else if (favourite === 9) {
  console.log(`9 is also a cool number`);
}else if (favourite === 7) {
  console.log(`7 is also a cool number`);
}else {
  console.log(`Number is not 23 or 7 or 9`);
}
if (favourite !== 23) console.log('why not 23?');


// Basic Boolean Logic:The AND, OR & NOT Operators//

// A(false) AND(&&) B(true) = false  true when all are true
// A(false) OR(||) B(true) = true  true when one is true
// A(false) NOT(!) B(true) = false  A is false

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive`);
}else {
  console.log(`Someone else should drive..`);
}

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
}else {
  console.log(`Someone else should drive..`);
}

*/

       // Coding challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Catss score 97, 112 and 101. Dogs score 109, 95 and 123
TEST DATA BONUS 2: Birds score 97, 112 and 101. fishes score 109, 95 and 106

GOOD LUCK 😀

// 1
const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;
console.log(scoreDolphins, scoreKoalas);

// 2
if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
}else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the trophy`);
}else if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy`);
}

// 3
const scoreCats = (97 + 112 + 101)/3;
const scoreDogs = (109 + 95 + 123)/3;
console.log(scoreCats, scoreDogs);

if (scoreCats > scoreDogs && scoreCats >= 100) {
  console.log(`Cats win the trophy`);
}else if (scoreDogs > scoreCats) {
  console.log(`Dogs win the trophy`);
}else if (scoreCats === scoreDogs) {
  console.log(`Both win the trophy`);
}

// extra
const scoreCatsDraw = (97 + 112 + 80)/3;
const scoreDogsDraw = (109 + 95 + 50)/3;
console.log(scoreCatsDraw, scoreDogsDraw);

if (scoreCatsDraw > scoreDogsDraw && scoreCatsDraw >= 100) {
  console.log(`Cats win the trophy`);
}else if (scoreDogsDraw > scoreCatsDraw) {
  console.log(`Dogs win the trophy`);
}else if (scoreCatsDraw === scoreDogsDraw && scoreCatsDraw >=100 && scoreDogsDraw >= 100) {
  console.log(`Both win the trophy`);
}else {
  console.log(`No one wins the trophy`);
}

// 4
const scoreBirds = (97 + 112 + 101)/3;
const scoreFishes = (109 + 95 + 106)/3;
console.log(scoreBirds, scoreFishes);

if (scoreBirds > scoreFishes && scoreBirds >= 100) {
  console.log(`Birds win the trophy`);
}else if (scoreFishes > scoreBirds) {
  console.log(`Fishes win the trophy`);
}else if (scoreBirds === scoreFishes && scoreBirds >=100 && scoreFishes >= 100) {
  console.log(`Both win the trophy`);
}else {
  console.log(`No one wins the trophy`);
}


//  The Conditional Tenary Operator 

const age = 23 ;
age >= 18 ? console.log(`I like to drink wine 🍷`) : 
console.log(`I like to drink water`);

const numberOfYears = 15 ;
numberOfYears >= 18 ? console.log(`I like to drink wine 🍷`) : 
console.log(`I like to drink tea ☕`);

const year = 15;
// const drink = year >= 18 ? 'wine 🍷' : 'water';
// console.log(drink);

let drink2;
if (year >= 18){
  drink2 = 'wine';
}else {
  drink2 = 'tea ☕';
}
console.log(drink2);

console.log(`I like to drink ${year >= 18 ? 'wine' : `water`}`);
*/

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// const bill = 275 ;
// const tip =  bill <= 300 && bill >= 50 ? bill * 0.15 : 
// bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const bill = 40 ;
// const tip =  bill <= 300 && bill >= 50 ? bill * 0.15 : 
// bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const bill = 430 ;
const tip =  bill <= 300 && bill >= 50 ? bill * 0.15 : 
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);