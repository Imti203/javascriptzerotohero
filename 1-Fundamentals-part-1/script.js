
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