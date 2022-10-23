/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  
  const opposite = [];
  
  for(let i=0, j=-1; i<parens.length; i++) {
    if(parens[i] === ')' && opposite[j] === '(') {
      opposite.pop();
      j--;
      continue;
    }
    
    opposite.push(parens[i]);
    j++;
  }
  
  return opposite.length == 0;
}

// alternative without array

function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
  }
  
  return n === 0;
}

// tests

const { assert } = require('chai');

describe("Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses( "(" ), false));
  it(`values: ")"`, () => assert.strictEqual( validParentheses( ")" ), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses( "" ), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses( "()" ), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses( "())" ), false));
});
