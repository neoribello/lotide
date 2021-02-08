// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual')

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty [] for [] or 1", () => {
    assert.deepEqual(middle([1]), []);
  })

  it("should return an empty [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  })

  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })

  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
});


//even
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false