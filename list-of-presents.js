/*
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _


*/
function howManyGifts(maxBudget, gifts){
  if(!maxBudget) {
    return 0;
  }
  
  gifts.sort((a, b) => a - b);
  
  let totalGifts = 0;
  while((maxBudget - gifts[totalGifts]) >= 0) {
    maxBudget -= gifts[totalGifts];
    totalGifts++;
  } 
  
  return totalGifts;
}

// tests
const Test = require('@codewars/test-compat');

describe("Foo", function(){

    function _getHowManyGifts(maxBudget, gifts){

      let budget = 0;
      let howMany = 0;
      gifts = gifts.sort((a, b) => a - b);
    
      for(let i = 0; i < gifts.length; i++){
        if (budget + gifts[i] > maxBudget) break;
        budget += gifts[i];
        howMany++;
      }
    
      return howMany
    
    }
    
    function _getRandomNumber(min, max){
      return Math.floor((Math.random() * max) + min)
    }
    
    function _getRandomArray(maxLength, maxNumber){
      array = [];
      randomLength = _getRandomNumber(1, maxLength);
      for(let i = 0; i < randomLength; i++){
        array.push(_getRandomNumber(0, maxNumber));
      }
      return array
    }

    it("should return 4", function(){
        Test.assertEquals(howManyGifts(20, [13, 2, 4, 6, 1]), 4);
    });

    it("should return 8", function(){
        Test.assertEquals(howManyGifts(90, [87, 3, 5, 25, 1, 3, 4, 6, 20]), 8);
    });

    it("should return 9", function(){
        Test.assertEquals(howManyGifts(100, [6, 94, 10, 45, 2, 4, 5, 6, 8, 1]), 9);
    });

    it("should return 0", function(){
        Test.assertEquals(howManyGifts(0, [1]), 0);
    });

    it("should return 7", function(){
        Test.assertEquals(howManyGifts(910238, [1231, 42340232403, 9324810, 23948, 19823, 1, 3209, 23894, 1093]), 7);
    });

    it("should return 217", function(){
        Test.assertEquals(howManyGifts(918, [1,1,1,900,1,56,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,1,1,1,1,1,1,1,1,0,0,0,0]), 217);
    });

    it("should return 110", function(){
        Test.assertEquals(howManyGifts(10000000, [4, 4, 4, 189189956, 489498, 489489, 6456321, 564156, 231231, 123, 4674, 74987, 45646, 1411, 5496, 9474, 42, 1111, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 478789, 454, 31321, 2222, 33334, 45465, 489479, 989, 4546, 123, 321, 456, 987, 453, 741, 1231, 45468, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 1, 646, 798798, 22, 45, 7897, 45132, 666, 1132, 12, 5478, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), 110);
    });

    it("should return all gifts (12)", function(){
        Test.assertEquals(howManyGifts(90, [10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5]), 12);
    });

    it("should return all gifts (4)", function(){
        Test.assertEquals(howManyGifts(4, [1, 1, 1, 1]), 4);
    });

    it("should return all gifts (56)", function(){
        Test.assertEquals(howManyGifts(1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 56);
    });

    for(let i = 1; i <= 150; i++){
        it("should pass yet another random test " + i + "/150", function(){
            randomNumber = _getRandomNumber(1, 9999);
            randomArray = _getRandomArray(9999, 9999);
            numberOfGifts = _getHowManyGifts(randomNumber, randomArray);
            Test.assertEquals(howManyGifts(randomNumber, randomArray), numberOfGifts);
        });
    }

});
