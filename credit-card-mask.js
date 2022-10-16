/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// solution

// return masked string
function maskify(cc) {
  if(cc.length < 5) return cc;
  
  return cc.slice(-4).padStart(cc.length, '#');
}

// sample

const Test = require('@codewars/test-compat');

describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});

// test cases

const Test = require('@codewars/test-compat');

describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
  it("should work for random examples", function(){
    var i, t, solution = function(cc) {
        return cc.split('').reduce(function(p,c,i){
          return p.push(i < cc.length - 4 ? '#' : c), p;
        }, []).join('');
    }
    for(i = 0; i < 100; ++i){
      t = Test.randomToken() + Test.randomToken() + Test.randomToken() + Test.randomToken();
      t = t.substr(0, 1 + (Test.randomNumber() % t.length));
      Test.assertEquals(maskify(t), solution(t));
    }    
  });
});
