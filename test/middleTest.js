const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

//odd
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

//even
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false