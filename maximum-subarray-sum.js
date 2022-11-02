/**
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
// solution
var maxSequence = function(arr){
  let sum = 0;
  let tmpSum = 0;
  
  for(let i = 0; i<arr.length; i++) {
    tmpSum = arr[i] + tmpSum;
    
    if(tmpSum > sum)
      sum = tmpSum;
    
    if(tmpSum < 0)
      tmpSum = 0;
  }
  
  return sum;
}

// tests
const { assert } = require ('chai');

describe( "maxSequence", function(){
  
  function doTest(input, expected) {
    assert.strictEqual(maxSequence([...input]), expected, `Incorrect answer for input=[${input}]`);
  }
  
  it("should work on an empty array",function(){
    doTest([], 0);
  });
  it("should work on the example",function(){
    doTest([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6);
  });
  it("should work on the example with negative numbers", function() {
    doTest([-2, -1, -3, -4, -1, -2, -1, -5, -4], 0);
  });
  it("should work on this too", function() {  
    doTest([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ], 155);
  });
  it("should work on random arrays", function(){
    let solution = function(arr){
      let i, j, k = 0, r;
      for(i = 0; i < arr.length; ++i){    
        for(r = 0, j = i; j < arr.length; ++j){
          r += arr[j];
          k = k > r ? k : r;
        }
      }
      return k;
    };
    let randomArray = function(n){
      let res = [];
      while( n --> 0 ) res.push(Math.round(Math.random() * 100 - 50));
      return res;
    }
    
    for(let i = 0; i < 50; ++i){
      let r = randomArray(Math.random() * 70);
      doTest(r, solution(r));
    }
  });
});
