const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
chai.use(require("chai-sorted"));
const _ = require("underscore");

/*
 * Bubble Sort
 */

const array = [4,5,14,14,21,1,7,8,92,421,33,44,29,87,41,44];
const original = array.slice();
const lengthBefore = array.length;

let operationCount = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        var iData = array[i];
        var jData = array[j];
        if (array[j] < array[i]) {
            array[i] = jData;
            array[j] = iData;
        }
        operationCount++;
    }
}

assert.equal(lengthBefore, array.length);
expect(array).to.be.sorted();
console.log("Operation count", operationCount);
assert.equal(_.difference(array, original).length, 0);
