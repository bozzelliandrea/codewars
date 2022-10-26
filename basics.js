// Basic FOUNDAMENTALS of JS - 8/7 kyu
//convert a Number to String

const numberToString = (num) => num + ""

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

const solution = (str, ending) => str.substring(str.length - ending.length) === ending;

// with js api

const solution = (str, ending) => str.endsWith(ending);


/*
Desc sorting

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  return Number(Array.from(String(n), Number).sort((a, b) => b - a).join(""))
}

// tests

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0)
    assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
    assert.strictEqual(descendingOrder(123456789), 987654321)
    })
  })

// Remove vowels from string

function disemvowel(str) {
  return str.replace(/[aAeEiIoOuU]/g, '');
}

/* array diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
function arrayDiff(a, b) {
  return a.filter(n => !b.includes(n));  
}

// tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});



