'use strict';

///////////////////////////////////////
// Scoping in Practice
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
   
function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <=1996) {
        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';
        const str = `oh, you are a millenial, ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }
        console.log (add(2, 3));
        // Reasssigning outer scope's variable
        output = 'NEW OUTPUT!'
    }
    // console.log (add(2, 3));
    console.log(output);
 }
 printAge();

 return age;
};

const firstName = 'Jonas';
 calcAge(1991);
*/

//////////////////////////////////////
// Hoisting and TDZ in Practice

/*
console.log(me);
// console.log(prof);
// console.log(year);

// variable
var me = 'Jonas';
let prof = 'teacher';
const year = 1991;

//Function 
console.log(addDcel(2, 3));
// console.log(addExpr(1, 2));
console.log(addArrow(3, 4));

function addDcel(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;


if(!numProducts) deleteShoppingCart();


console.log(undefined);
var numProducts = 10;
console.log(numProducts);

function deleteShoppingCart() {
    console.log('All products deleted!');
};

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

///////////////////////////////////////
// The this Keyword in Practice
/*
console.log(this);

const calcAge = function(birthYear) {
    console.log(2037- birthYear);
    console.log(this);
}
calcAge(1990);

const calcAgeArrow = birthYear => {
    console.log(2037- birthYear);
    console.log(this);
}
calcAgeArrow(1980);

const Jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
};
Jonas.calcAge();

const martilda = {
    year: 2017,
};
martilda.calcAge = Jonas.calcAge;
martilda.calcAge();

const f = Jonas.calcAge;
f();
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

/*
// var firstName = 'martilda';
const Jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);


        // Solution 01
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 02
        const isMillenial =  () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();

    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
Jonas.calcAge();
Jonas.greet();

/////arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12);
  
  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
//   addArrow(2, 5, 8);

*/

////////////////////////////////////////
// Objects vs. primitives

let age = 30;
let oldAge = age;
age = 31;

console.log(age, oldAge);

const me = {
    Name: 'Jonas',
    age:30,
};
const friend = me;
friend.age = 27;
console.log('frinds:', friend);
console.log('me:', me);

///////////////////////////////////////
// Primitives vs. Objects in Practice


//  Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    Name: 'Jonas',
    lastName: 'Williams',
    age:30,
};

// Reference types
const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
    Name: 'Jonas',
    lastName: 'Williams',
    age:30,
    family:['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);


