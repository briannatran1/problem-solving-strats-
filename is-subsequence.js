"use strict";

// add whatever parameters you deem necessary & write docstring

//input: two strings
//output: boolean

//declare two different pointers, one for each string that start at the beginning of each string

//loop while the pointer is still going through s1
  //if s2 is out of bounds, return false

  //check if the current char in s1 is equal to the curr char in s2
    //move BOTH pointers up by one
  //if not, move s2's pointer up by one

// return true
/** Determine whether s1 is a subsequence of s2 and return a boolean*/

function isSubsequence(s1, s2) {
  let s1Start = 0;
  let s2Start = 0;

  while (s1Start < s1.length) {
    if (s2Start === s2.length) return false;

    if (s1[s1Start] === s2[s2Start]) {
      s1Start++;
      s2Start++;
    } else {
      s2Start++
    }
  }

  return true;
}
