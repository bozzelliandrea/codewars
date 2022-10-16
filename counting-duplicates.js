/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

// solution

function duplicateCount(text){

  if(!text || text.length < 2) return 0;
  
  const dm = new Map();
  const chars = text.toLowerCase().split('');
  
  for(let i=0; i<chars.length; i++) {
    if(dm.get(chars[i])) {
      dm.set(chars[i], dm.get(chars[i]) + 1);
    } else {
      dm.set(chars[i], 1);
    }
  }
  
  for (let [key, value] of dm) {
    if(value == 1) dm.delete(key);
  }
  
  return dm.size
}

//text example

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1)
Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

  });
});


// random tests

describe("More tests", function(){
  let lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase();
  Test.assertEquals(duplicateCount(lowers), 0)
  Test.assertEquals(duplicateCount(lowers + "baaAAB"), 2, "characters may not be adjacent")

  Test.assertEquals(duplicateCount(lowers+lowers), 26)
  Test.assertEquals(duplicateCount(lowers+uppers), 26, "should ignore case")
  
  let rnd = function(x){ return ~~(Math.random()*x) };
  
  console.log("Random tests");
  for( let t=0, times=5+rnd(4); t<times; t++ ){
    let len = 3+rnd(5), i=len+1, str = lowers.slice(0,len*2);
    if( rnd(100)<70 ){
      while( i-- ) str += ([lowers,uppers][rnd(2)]).slice(0,i);
    }else{
      str += lowers.slice(-len);
      len = 0;
    }
    console.log("> "+str+" ?")
    Test.assertEquals(duplicateCount(str),len)
  }
})
