

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