// Using const for values that won't change
const num1 = 10;
const num2 = 5;

console.log("Using const:");
console.log("num1:", num1);
console.log("num2:", num2);

// Using let for values that may change
let sum = num1 + num2;
let difference = num1 - num2;

console.log("\nUsing let:");
console.log("Sum:", sum);
console.log("Difference:", difference);

// Modify values declared with let
sum += 5; // Increment sum by 5
difference -= 2; // Decrement difference by 2

console.log("Updated Sum:", sum);
console.log("Updated Difference:", difference);

// Using var for a variable with functional or global scope
var product = num1 * num2;
var quotient = num1 / num2;

console.log("\nUsing var:");
console.log("Product:", product);
console.log("Quotient:", quotient);

// Modify var variables
product *= 2; // Double the product
quotient /= 2; // Halve the quotient

console.log("Updated Product:", product);
console.log("Updated Quotient:", quotient);
