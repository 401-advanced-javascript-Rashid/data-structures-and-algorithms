'use strict';

const InsertionSort = require('../challenge/Insertion-Sort.js');


describe('Insertion Sort test' , ()=> {


  it('Sort the Reverse-sorted ', ()=> {
    expect(InsertionSort([20,18,12,8,5,-2])).toEqual([ -2, 5, 8, 12, 18, 20]);
  });

  it('Sort the Few uniques ', ()=> {
    expect(InsertionSort([5,12,7,5,5,7])).toEqual([ 5, 5, 5, 7, 7, 12]);
  });

  it('Sort the Nearly-sorted ', ()=> {
    expect(InsertionSort([2,3,5,7,13,11])).toEqual([ 2, 3, 5, 7, 11, 13]);
  });

  it('Sort this array ', ()=> {
    expect(InsertionSort([2,3,-66,7,10,27,-16,55,33,-1,100,6,13,11])).toEqual([ -66, -16, -1, 2, 3, 6, 7, 10, 11, 13, 27, 33, 55, 100 ]);
  });
});