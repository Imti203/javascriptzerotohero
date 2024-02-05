

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