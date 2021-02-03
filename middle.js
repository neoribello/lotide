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

const arraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
}

const middle = function(arr) {
    let midArr = [];
    if(arr.length <= 2) {
        return midArr;
    } 

    let index = arr.length / 2;
    if(arr.length % 2 === 0) {
        midArr.push(arr[index - 1], arr[index])
    } else {
        midArr.push(arr[Math.floor(index)])
    }
    return midArr;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

//odd
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

//even
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

