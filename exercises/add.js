'use strict';

/*
 * Create a `add` function that takes 2 number arguments and add them
 *
 * @notions Primitive and Operators, Functions
 */

// Your code:
const rand = Math.random();
let finalValue =0;
function add(numberOne, Number2)
{
    finalValue = numberOne + Number2;
    return finalValue;
};

console.log(add.length);
console.log(add(2, 2));
console.log(add(rand, rand));
//* Begin of tests
const assert = require('assert');


assert.strictEqual(typeof add, 'function');
assert.strictEqual(add.length, 2);
assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(rand, rand), rand + rand);
// End of tests */
