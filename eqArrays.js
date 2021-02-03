const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => tru 
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false