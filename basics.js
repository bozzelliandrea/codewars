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

// slow solution
// TC:  O(n)^2
function arrayDiff(a, b) {
  return a.filter(n => !b.includes(n));  
}

// efficient
// TC: O(a + b) -> b[] to Set<B> is O(b), than a 0(n) time for a based on a[] size.
function array_diff(a, b) {
  const b_set = new Set(b)
  return a.filter(e => !b_set.has(e));
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

// reverse array
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

reverse = function(array) {
  let tmp;
  for(let i=0, j=array.length-1; i<array.length/2; i++, j--) {
    tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array
}

// tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual( reverse([1,2,3]), [3,2,1] )
    assert.deepEqual( reverse([1,null,14,"two"]), ["two",14,null,1] )
  });
});

describe("Random test with native reverse disabled", () => {
  
  const myReverse = Array.prototype.reverse;

  function randIntArray() {
    let res = [Math.floor(Math.random()*999) + 1];
    while (Math.random() < 0.75) res.push( Math.floor(Math.random()*999) + 1);
    return res;
  }

  function randStrArray() {
    let res = ["abcDe1fgHijkLmnO72rstuVwxyZ"[Math.floor(Math.random()*30)]];
    while (Math.random() < 0.75) res.push( "aBc9DefgHi16jknOpqrstuV0wXyz"[Math.floor(Math.random()*30)]);
    return res;
  }
  
  function beforeTests() {
    Array.prototype.reverse = () => { throw Error("Oh, no you don't!") }
  }
  
  function afterTests() {
    Array.prototype.reverse = myReverse;
  }

  // TESTS:
  for (let i=0; i<25; i++) {
    let test = randIntArray();
    let exp=test.reduce( function(a,b){ return [b].concat(a) }, [])
    it(`Testing with: [${test.join(", ")}]`, () => {
      beforeTests()
      assert.deepEqual( reverse(test) , exp);
      afterTests()
    });  
  }

  for (let i=0; i<25; i++) {
    let test = randStrArray();
    let exp=test.reduce( function(a,b){ return [b].concat(a) }, [])
    it(`Testing with: [${test.join(", ")}]`, () => {
      beforeTests()
      assert.deepEqual( reverse(test) , exp);
      afterTests()
    });  
  }

});

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {
  if((num + "").length === 0)
     return 0;
  
  let times = 0;
  
  while((num + "").length !== 1) {
    num = (num + "").split("").reduce((accumulator, current) => accumulator*current,1); 
    times++;
  }
  
  return times;
}
// tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });

