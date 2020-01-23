'use strict'


const binarySearch= require('../arrayBinarySearch/array-binary-search.js');

describe('Output', () => {
    
    it('The number is found', () => {
        let array_1 = [4, 8, 15, 16, 23, 42];
        expect(binarySearch(array_1, 15)).toBe(2);
    });
    
    it(`Can't find the number`, () => {
        let array_2 = [11, 22, 33, 44, 55, 66, 77];
    expect(binarySearch(array_2, 90)).toBe(-1);
  });
})