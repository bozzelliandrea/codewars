/*
Given the triangle of consecutive odd numbers:

             1 = 1
          3     5 = 8 = 2^3
       7     9    11 = 27 = 3^3
   13    15    17    19 = 65 = 4^3
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Exp:
the solution was derive by realizing what each row has in common, which turns out the row number is the cube root of the row's sum.
1 is the product of 111 = 1
8 is the product of 222 = 8
27 is the product of 333 = 27
The sum of any row of odd numbers is just the row number cubed.

*/

function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
