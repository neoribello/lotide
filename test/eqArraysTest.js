const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => tru
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false