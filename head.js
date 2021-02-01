const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅ Assertion Passed: 1 === 1`);
    } else {
        console.log(`🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"`);
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(arr) {
    return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");