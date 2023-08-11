"use strict";

// add whatever parameters you deem necessary & write docstring

//input: nums (array), targetAvg (num)
//output: boolean
//edge case: empty array = return false

//declare a left and right pointer to point at either end of the input array
//loop until the pointers cross (while)
//check if the two numbers at each pointer added together and divided by 2 equal the input targetAvg
// if so, return true
// if the current average is greater than targetAvg, move the right pointer in one position
// else, move the left pointer in one time

//return false


/** Determine if sorted array of numbers contains a pair whose average is equal to a targetAvg.
 * Returns a boolean
 */

function averagePair(nums, targetAvg) {
  if (nums.length === 0) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currAvg = (nums[left] + nums[right]) / 2;

    if (currAvg === targetAvg) {
      return true;
    } else if (currAvg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}
