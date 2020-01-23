'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');

describe('Output', () => {
    
    it('The number is pushed', () => {
        let arr = [2,4,6,8];
        expect(insertShiftArray(arr, 5).length).toBe(5);
    });
    
    it('The number is pushed', () => {
        let arr = [4,8,15,23,42];
        expect(insertShiftArray(arr, 16).length).toBe(6);
    });
})