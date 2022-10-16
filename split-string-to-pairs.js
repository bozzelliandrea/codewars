// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// solution

function solution(str){
  if(!str) return [];
  
  const pairs = [];
  let pair = '';
  
  for(let i=0; i < str.length; i+=2){
    pair = str.substring(i, i + 2);
    pairs.push(pair.length == 2 ? pair : pair + '_');
  }
  
  return pairs;
}

// example

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
  
  it("Random tests", () => {
    function sol(str){
      var pairs = str.match(/.{1,2}/gi);
      if (pairs && pairs[pairs.length-1].length == 1){
        pairs[pairs.length-1] += '_';
      }
      return pairs || [];
    }
    for (let i = 0; i < 100; i++) {
      const s = Array(0 | Math.random() * 50 + 1).fill().map(() => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.random() * 52 | 0]).join``;
      assert.deepEqual(solution(s), sol(s));
    }
  });
});
