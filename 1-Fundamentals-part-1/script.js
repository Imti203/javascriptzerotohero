

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