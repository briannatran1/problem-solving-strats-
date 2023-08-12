'use strict';

// add whatever parameters you deem necessary & write docstring

/*This should take two arrays of possibly-different lengths. The first array consists of keys and the second one consists of values.

This should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null.
If there not enough keys, just ignore the rest of values.*/


/** Taking 2 arrays, keys and values, create and obj from those elements in keys and values. Return obj. */

//inputs: two arrays
//outputs: obj

//declare an obj
//iterate through keys using for...loop
//if i less than values arr length
//set obj key to values[i]
//else,
//set key equal to null
//return obj

function twoArrayObject(keys, values) {
  const keysValuesObj = {};

  for (let i = 0; i < keys.length; i++) {
    if (i < values.length) {
      keysValuesObj[keys[i]] = values[i];
    }
    else {
      keysValuesObj[keys[i]] = null;
    }
  }

  return keysValuesObj;
}
