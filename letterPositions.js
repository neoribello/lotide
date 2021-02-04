const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }
  for(let x = 0; x < arr1.length; x++) {
      if(arr1[x] !== arr2[x]) {
          return false
      } 
  } 
  return true;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++) {
    //execute if the character is not '_'
    if(sentence[i] !== ' ') {
      if(results[sentence[i]]) {
        results[sentence[i]].push[i]
      } else {
        results[sentence[i]] = [i]
      }
    }
  }
  return results;
};


assertEqual(letterPositions("hello").e, [1]);