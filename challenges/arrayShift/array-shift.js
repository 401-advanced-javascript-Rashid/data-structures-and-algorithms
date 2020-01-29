'use strict';


function insertShiftArray(arr, number) {
  const mid = arr.length / 2;
  const newArr = [];
  let index = 0;

  for (let i = 0; i < mid; i++) { newArr [ index ] = arr[i];
    index += 1;
  }
    
  newArr[mid] = number;
  for (let i = mid; i < arr.length; i++) { newArr [ newArr.length ] = arr[i];
  }
  return newArr;
}

module.exports = insertShiftArray;