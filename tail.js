const assertEqual = require('./assertEqual');
// TEST CODE


const tail = function(arr) {
  let tailArr = [];
  for (let x = 1; x < arr.length; x++) {
    tailArr.push(arr[x]);
  }
  return tailArr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


