/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


  how to check if the values can create a triangle?
  a + b > c
  b + c > a
  a + c > b

  with values:
  a = 7
  b = 2
  c = 2

  7 + 2 = 9 > 2
  2 + 2 = 4 > 9 false not a trianglle
  2 + 7 = 9 > 2

*/

// solution
function isTriangle(a,b,c)
{
   if((a + b) > c)
     if((b + c) > a)
         return (a + c) > b;
       
   return false;
}

const lamdbaTriangle = (a,b,c) => { return a + b > c && a + c > b && c + b > a }

// test

const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})
