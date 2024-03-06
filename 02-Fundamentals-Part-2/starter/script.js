
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


// const calcAverage = (a, b, c) => (a+ b+ c) / 3;
// console.log(calcAverage(3, 4, 5));

// Test 1
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolhins, avgKoalas){
//     if(avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🍟 (${avgDolhins} vs ${avgKoalas})`);
//     }else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win 🍟 (${avgKoalas} vs ${avgDolhins})`);
//     }else{
//         console.log(`No team wins...`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////////////////////////////////////
// Introduction to Arrays
///////////////////////////////////////////////////////////////////////

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends =['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(19991, 1984, 2008, 2020);

// console.log(friends[2]);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends [2] ='jay';
// console.log(friends);

// const namePerson = 'Jonas';
// const jonas = [namePerson, 'mike', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function(birthYear) {
//     return 2038 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

///////////////////////////////////////////////////////////////////////
// Basic Array Operations Methods
///////////////////////////////////////////////////////////////////////

// const friends = ['Micheal', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(newLength);
// console.log(friends);

// friends.unshift('Jhon');
// console.log(friends);

// // Remove elements
// friends.pop(); // last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// // Important methods
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));
// console.log(friends);

// if (friends.includes('Steven')) {
//     console.log('You have a friend Steven');
// }

//////////////////////////////////////////////////////////////////////
// Coding challenge 02
///////////////////////////////////////////////////////////////////////

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//////////////////////////////////////////////////////////////////////
// Introduction to Objects
///////////////////////////////////////////////////////////////////////

// const jonasArray = [
//     'Jonas',
//     'Ray',
//     2038 - 1991,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven']
// ];
// console.log(jonasArray);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Ray',
//     age: 2038 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };
// console.log(jonas);


//////////////////////////////////////////////////////////////////////
//  Dot vs Bracket Notation
///////////////////////////////////////////////////////////////////////



const jonas = {
    firstName: 'Jonas',
    lastName: 'Ray',
    age: 2038 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

console.log(jonas.firstName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const aboutJonas = prompt('what do you want to know about jonas? Choose between firstName, lastName, age, job, location,  twitter and friends');
console.log(aboutJonas);
console.log(jonas.aboutJonas);
console.log(jonas[aboutJonas]);

if (jonas[aboutJonas]) {
    console.log(jonas[aboutJonas]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jdlsaadjdlj';
console.log(jonas);

// //challenge
// //"Jonas has 3 friends, and his best friend is called Micheal"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

const person = {
    personName: 'Jonas',
    friendsNumber: 3 ,
    bestFriend: 'Micheal',
};
console.log(person);

const personDetails = prompt('what do you want to know about jonas? Choose between  personName, friendsNumber, bestFriend');


if (person[personDetails]) {
    console.log(person[personDetails]);
} else {
    console.log('Wrong request! Choose between  personName, friendsNumber, bestFriends')
};

