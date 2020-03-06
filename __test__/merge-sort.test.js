'use strict';

const mergeSort = require('../challenge/merge-sort.js');

describe('Merge Sort' , ()=> {

  it('Sort an array ', ()=> {
    expect(mergeSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
  });
});