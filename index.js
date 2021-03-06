const chai = require("chai");
const _ = require("underscore");
const assert = chai.assert;
const expect = chai.expect;

chai.use(require("chai-sorted"));

/*
 * Insertion Sort
 */

const array = [4,5,14,14,21,1,7,8,92,421,33,44,29,87,41,44];

// For logging
const original = array.slice();
const lengthBefore = array.length;
let operationCount = 0;

for (let i = 0; i < array.length; i++) {

    var iData = array[i];
    var j = i - 1;

    while (j >= 0 && array[j] > iData) {
        array[j+1] = array[j];
        j--;
        operationCount++;
    }

    array[j + 1] = iData;
}

assert.equal(lengthBefore, array.length);
assert.equal(_.difference(array, original).length, 0);
expect(array).to.be.sorted();
console.log("Operation count", operationCount);
