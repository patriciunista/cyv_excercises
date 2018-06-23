/* Exercise 1 */
// Import function
Array.prototype.cIndexOf = require('./functions/customIndexOf');

// Data
const a = ['a', 'b', 'c', 'd', 'e', 'a', 'b'];

/* Exercise 2
 * Note: See also ./customIndexOf.test.js
 */
console.log("Custom indexOf method with ['a', 'b', 'c', 'd', 'e', 'a', 'b']:")
console.log("Find 'a' starting at 0:", a.cIndexOf("a")); // should return 0
console.log("Find 'c' starting at 2:", a.cIndexOf("c", 2)); // should return 2
console.log("Find 'c' starting at 3:", a.cIndexOf("c", 3)); // should return -1
console.log("Find 'd' starting at 3:", a.cIndexOf("d", 3)); // should return 3
console.log("Find 'a' starting at 4:", a.cIndexOf("a", 4)); // should return 5


/* Exercise 3 */

// Import function
const splitArray = require('./functions/splitArray');

// Data
const array_1 = [5, 2, 5, 0, 5, 7, 5];
const array_2 = [5, 2, 3, 0, 2, 7, 5];
const array_3 = [5, 5, 5, 5, 5, 0, 4, 3, 2, 3, 5, 3, 2, 5];
const array_4 = [0, 2, 0, 0, 1, 2, 5, 5, 5, 5];
const num = 5;

// Results
console.log("\nSplit Array function: ");
console.log("Split [5, 2, 5, 0, 5, 7, 5] in 2 segments: ", splitArray(num, array_1)); // should be 3
console.log("Split [5, 2, 3, 0, 2, 7, 5] in 2 segments: ", splitArray(num, array_2)) // should be 5
console.log("Split [5, 5, 5, 5, 5, 0, 4, 3, 2, 3, 5, 3, 2, 5] in 2 segments: ", splitArray(num, array_3)) // should be 7
console.log("Split [0, 2, 0, 0, 1, 2, 5, 5, 5, 5] in 2 segments: ", splitArray(num, array_4), "\n") // should be 0