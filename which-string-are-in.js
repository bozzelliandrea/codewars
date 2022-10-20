/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

// time complexity O(n^2)

function inArray(array1,array2){
  const result = [];
  
  loop1:
  for(let i = 0; i < array1.length; i++) {
      loop2:
      for(let j = 0; j < array2.length; j++) {
        if(array2[j] && array1[i] && array2[j].includes(array1[i])) {
          result.push(array1[i]);
          continue loop1;
        }
      }
  }
  
  if(result.length > 0) {
    result.sort();
  }
  
  return result;
}

//tests

describe("Tests", () => {
  it("test", () => {
a1 = ["xyz", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
Test.assertSimilar(inArray(a1, a2), [])

  });
});
