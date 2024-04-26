// Code goes here!
var e1 = {
    name: 'John',
    age: 40,
    address: 'sdfsdfsf'
};
// Generic types
var sum = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'boolean' && typeof b === 'boolean') {
        return a || b;
    }
    else {
        throw new Error('Unsupported types for sum operation.');
    }
};
var ans1 = sum(5, 6); // T is inferred as number
console.log(ans1); // Output: 11
var ans2 = sum('hello', ' world'); // T is inferred as string
console.log(ans2); // Output: 'hello world'
var ans3 = sum(true, false); // T is inferred as boolean
console.log(ans3); // Output: true
