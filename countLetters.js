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


const countLetters = function(sentence) {
    const results = {};

    for(const letter of sentence) {
        if(letter !== ' ') {
            if(results[letter]) {
                results[letter] += 1;
            } else {
                results[letter] = 1;
            }
        }
    }
    return results;
}


console.log(countLetters('I really hope this works')) // => 