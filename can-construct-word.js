'use strict';
// add whatever parameters you deem necessary & write doc comment

/*This should accept two strings: word and letters. It should return true if the word can be built with the letters;
otherwise, it should return false.

There are only lowercase letters (with no spaces or punctuation) in both word and letters.

Constraints: time complexity: O(w + k) (if w is the length of word and k is the length of letters)*/

/** See if letters string can form word string. Return boolean */

//inputs: two strings
//outputs: boolean => T/F

//edge cases:
//both strings empty?

//make frequency counters for both word and letters
//loop thorough word freq counter
//if values in word is greater than letters,
//return false
//return true

function canConstructWord(word, letters) {
  const wordFreq = frequencyCounter(word);
  const lettersFreq = frequencyCounter(letters);

  for (let letter in wordFreq) {
    let wordChar = wordFreq[letter];
    let letterChar = lettersFreq[letter];

    if (!(letter in lettersFreq) || wordChar > letterChar) {
      return false;
    }
  }

  return true;
}

/** Making a frequency counter. Returns obj */

// make frequency counter function to create counter objs for word and letters
// declare freq obj
// iterate through str using for... of loop
// if char exists in freq obj,
//increment value at key
//else,
// set equal to 1
//return freq obj

function frequencyCounter(item) {
  const freq = {};

  for (let val of item) {
    const curr = freq[val] || 0;
    freq[val] = curr + 1;
  }

  return freq;
}