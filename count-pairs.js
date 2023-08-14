'use strict';
// add whatever parameters you deem necessary & write docstring

/*Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter.
You can assume that there will be no duplicate values in the array.*/

// Time complexity: O(n × log n) (good) or O(n) (better)

/** Take an array and continuously finds a pair of numbers that adds up to num
 *
 * Returns a number
 */

// inputs: array of integers, a number
// outputs: number

// declare pairs var
// declare start pointers
// sort integers array from ascending order
// while start pointer
// if vals at pointers are equal to num
// increment pairs and start2
// else sum is not equal to num
// increment start2
// if start2 is at the end of the array,
// increment start 1
// assign start 2 to start1 + 1
// return pairs

function countPairs(integers, num) {
  let pairs = 0;
  let start1 = 0;
  let start2 = 1;

  integers.sort((a, b) => a - b); // O(n log n)

  while(start1 < integers.length - 1){
    if(integers[start1] + integers[start2] === num){
      pairs++;
      start2++;
    }
    else {
      start2++
    }

    if(start2 === integers.length){
      start1++;
      start2 = start1 + 1;
    }
  }

  return pairs;
}

// Time complexity: O(n x log n)

/** Finds pair of numbers that adds up to num without the sort method
 *
 * Returns a number
 */
function countPairs(integers, num) {
  let pairs = 0;
  let start1 = 0;
  let start2 = 1;

  while(start1 < integers.length - 1){
    if(integers[start1] + integers[start2] === num){
      pairs++;
      start2++;
    }
    else{
      start2++
    }

    if(start2 === integers.length){
      start1++;
      start2 = start1 + 1;
    }
  }

  return pairs;
}

// Time complexity: O(n)