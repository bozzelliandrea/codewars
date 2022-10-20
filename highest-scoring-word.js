/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(inputString){

  const word = {
    point: 0,
    s: ""
  }
  
  let tmpPoints = 0;
  
  for(let string of inputString.split(' ')) {
    for(let i=0; i<string.length; i++) {
      tmpPoints = tmpPoints + string.charCodeAt(i) - 96;
    }
    
    if(tmpPoints > word.point) {
      word.s = string;
      word.point = tmpPoints;      
    }
    tmpPoints = 0;
  }
  
  
  return word.s;
}


// tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});
