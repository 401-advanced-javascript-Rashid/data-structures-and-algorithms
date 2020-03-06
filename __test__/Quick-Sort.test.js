'use strict';

const quickSort = require('../challenge/Quick-Sort.js');


describe('Quick' , ()=> {


  it('Sort an array ', ()=> {
    expect(quickSort([9,13,-8,6,5] , 0 ,4)).toEqual([-8,5,6,9,13]);
  });

  it('length of 2 ', ()=> {
    expect(quickSort([20,1],0,1)).toEqual([1,20]);
  });

  it('length of 1 ', ()=> {
    expect(quickSort([9],0,0)).toEqual([9]);
  });

});