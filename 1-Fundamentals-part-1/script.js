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
  */

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