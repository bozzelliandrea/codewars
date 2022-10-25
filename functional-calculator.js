/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function expression(number, fn){
	if(!fn)
		return number;
	return fn(number);
}

function zero(fn) { return expression(0, fn); }
function one(fn) { return expression(1, fn); }
function two(fn) { return expression(2, fn); }
function three(fn) { return expression(3, fn); }
function four(fn) { return expression(4, fn); }
function five(fn) { return expression(5, fn); }
function six(fn) { return expression(6, fn); }
function seven(fn) { return expression(7, fn); }
function eight(fn) { return expression(8, fn); }
function nine(fn) { return expression(9, fn); }

function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function dividedBy(x) {
  return function(y) {
		return Math.floor(y / x);
	}
}

// tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times(five())), 35);
    assert.strictEqual(four (plus     (nine ())), 13);
    assert.strictEqual(eight(minus    (three())),  5);
    assert.strictEqual(six  (dividedBy(two  ())),  3);
  });
});
