'use strict';

// add whatever parameters you deem necessary & write docstring

/*This should take an array of non-zero numbers. Separate the positive numbers to the left and the negative numbers to the right.
The positive numbers and negative numbers need not be in sorted order.

The problem should be done in place, and the function should return the original array, not a copy.*/

/** Given an array, move positive numbers to the right and negative numbers to the left. Order does not matter. Returns array */

//inputs: array of non-zero numbers
//outputs: array of numbers

//edge cases:
  // all positives?
  // all negatives?

//Time complexity: O(n)

//two pointer method?
//declare pointer vars => start and end
//while start and end pointers do not overlap
  //check numbers at start and end
  //if both numbers at pointers needs to be swapped,
    //swap positions
  //else if number on start only needs to be swapped,
    //decrement end
  //else
    //increment start
//return nums

function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;

  while(start < end){
    if(nums[start] < 0 && nums[end] > 0){
      [nums[start], nums[end]] = [nums[end], nums[start]];
    }
    else if(nums[start] < 0){
      end--;
    }
    else{
      start++;
    }
  }
  return nums;
}
