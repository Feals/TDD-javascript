'use strict';

/*
 * Create the `abs` function that takes one number argument
 * and returns its absolute value.
 * You are not allowed to use `Math.abs`, make your own.
 * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 *
 * @notions Functions, Ternary
 */

// Your code:
let absoluteNumber = 0;
function abs (number)
{ if (number < 0) {
    absoluteNumber = number-(2*number); 
}
else {
    absoluteNumber = number;
}
return absoluteNumber;
};

console.log(abs.length);
console.log(abs(0));
console.log(abs(-1));
console.log(abs(-13.2));
console.log(abs(132));

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof abs, 'function');
assert.strictEqual(abs.toString().includes('Math.abs'), false);
assert.notStrictEqual(abs, Math.abs);
assert.strictEqual(abs.length, 1);
assert.strictEqual(abs(0), 0);
assert.strictEqual(abs(-1), 1);
assert.strictEqual(abs(-13.2), 13.2);
assert.strictEqual(abs(132), 132);
// End of tests */
