/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function isPangram(input){
  
  const words = input.toUpperCase().split(' ');
  let index = -1;
  
  for(const word of words) {
    const chars = word.split('');
    
    for(const c of chars) {
      index = alphabet.indexOf(c);
      if(index > -1) {
        alphabet.splice(index, 1);
      }      
    }
  }
  
  return alphabet.length === 0;
}

const lambdaPanagram = (input) => { return alphabet.every((letter) => input.toUpperCase().includes(letter)) };

// test

const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test1", () => {
    var string = "The quick brown fox jumps over the lazy dog."
    assert.strictEqual(isPangram(string), true)
  })
  it("test2", () => {
    var string = "This is not a pangram."
    assert.strictEqual(isPangram(string), false)
  });
});
