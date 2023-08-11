"use strict";
// add whatever parameters you deem necessary & write docstring

//input: two numbers
//output: boolean

//create counters for each number converted to a string

//loop over one of the counters
//check if the current key's (digit) value is the same on the other counter
//if not, return false
//return true

/** Check if two numbers have the same frequency of digits. Returns a boolean */

function sameFrequency(num1, num2) {
  const freqObj1 = createFrequencyObject(num1.toString());
  const freqObj2 = createFrequencyObject(num2.toString());

  for (let digit in freqObj1) {
    if (freqObj1[digit] !== freqObj2[digit]) return false;
  }

  return true;
}

//create a helper function to create a frequenct counter
//declare a freqObj
//loop over the input stringNum
//check if the current digit exists in the freqObj
//if so, increment
//otherwise, assign it to one
//return the freqObj

/** Creates a frequency object for the input item and returns it*/

function createFrequencyObject(item) {
  const freqObj = {};

  for (let val of item) {
    freqObj[val] = (freqObj[val] || 0) + 1;
  }

  return freqObj;
}
