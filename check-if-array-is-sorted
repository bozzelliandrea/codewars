//solution

function inAscOrder(arr) {
  
  if(arr.length < 2)
    return true;
  
  for(let i=0; i<arr.length; i++){
    if(!arr[i+1]) {
      break;
    }
    if(arr[i] > arr[i+1]){
      return false;
    }
  } 
  
  return true;
}

// test cases

const chai = require("chai");
const assert = chai.assert;

"use strict";

describe("Fixed tests", () => {
  it("Should pass description examples", () => {
    assert.strictEqual(inAscOrder([1, 2, 4, 7, 19]), true, 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
    assert.strictEqual(inAscOrder([1, 2, 3, 4, 5]), true, 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
    assert.strictEqual(inAscOrder([1, 6, 10, 18, 2, 4, 20]), false, 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
    assert.strictEqual(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
  });
});    

describe("Some more fixed tests", () => {
  it("Should pass tests with arrays of 2 numbers", () => {
    assert.strictEqual(
      inAscOrder([1,2]),
      true
    );
    assert.strictEqual(
      inAscOrder([2,1]),
      false
    );
  });    
  
  it("Should pass tests with arrays of 3 numbers", () => {
    assert.strictEqual(
      inAscOrder([1,2,3]),
      true
    );
    assert.strictEqual(
      inAscOrder([1,3,2]),
      false
    );
    assert.strictEqual(
      inAscOrder([2,1,3]),
      false
    );
    assert.strictEqual(
      inAscOrder([2,3,1]),
      false
    );
    assert.strictEqual(
      inAscOrder([3,1,2]),
      false
    );
    assert.strictEqual(
      inAscOrder([3,2,1]),
      false
    );
  });
  
  it("Should pass advanced tests", () => {

    assert.strictEqual(
      inAscOrder([1,4,13,97,508,1047,20058]),
      true
    );
    assert.strictEqual(
      inAscOrder([56,98,123,67,742,1024,32,90969]),
      false
    );
  });
});  

describe("Random tests tests", () => {
  
  function donaldSebLeungsCorrectSolution(arr) {
    "use strict";
    var i;
    var inOrder = true;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        inOrder = false;
      }
    }
    return inOrder;
  }
  
  var iterate;
  
  for (iterate = 0; iterate < 150; iterate++) {
    var a = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var b = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var c = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var d = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var numsArray = [a,b,c,d];
    if (donaldSebLeungsRandom() < .5) numsArray.sort((a, b) => a - b); // Added to make it more random
    it(`Testing with [${numsArray.join(",")}]`, () => {
      assert.strictEqual(inAscOrder(numsArray.slice()),donaldSebLeungsCorrectSolution(numsArray));
    });  
  }

  for (iterate = 0; iterate < 25; iterate++) {
    var a = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var b = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var c = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var d = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var e = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var numsArray = [a,b,c,d,e];
    it(`Testing with [${numsArray.join(",")}]`, () => {
      assert.strictEqual(inAscOrder(numsArray.slice()),donaldSebLeungsCorrectSolution(numsArray));
    });  
  }

  for (iterate = 0; iterate < 25; iterate++) {
    var a = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var b = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var c = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var d = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var e = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var f = donaldSebLeungsRound(10000 * donaldSebLeungsRandom());
    var numsArray = [a,b,c,d,e,f];
    it(`Testing with [${numsArray.join(",")}]`, () => {
      assert.strictEqual(inAscOrder(numsArray.slice()),donaldSebLeungsCorrectSolution(numsArray));
    });  
  }

});
