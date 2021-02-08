// const tail = require('../tail');
// const assertEqual = require("../assertEqual");

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("original array should still have 3 elements!", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});


// // tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!