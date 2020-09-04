const assert = require('assert');

const sum = (...numbers) => {
    return numbers.reduce((numberA, numberB) => numberA + numberB, 0);
};

assert.equal(sum(), 0);
assert.equal(sum(1), 1);
assert.equal(sum(1, 2), 3);
assert.equal(sum(1, 2, 3), 6);
assert.equal(sum(1, 2, 3, 4), 10);