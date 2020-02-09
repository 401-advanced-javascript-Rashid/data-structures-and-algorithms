'use strict';


const Øfdream_Sick_And_D = require('../multiBracketValidation/multi-bracket-validation.js');

describe('multi bracket validation', ()=> {

  it('return true', ()=> {
    expect(Øfdream_Sick_And_D('{}')).toBe(true);
    expect(Øfdream_Sick_And_D('{}(){}')).toBe(true);
    expect(Øfdream_Sick_And_D('()[[Extra Characters]]')).toBe(true);
    expect(Øfdream_Sick_And_D('(){}[[]]')).toBe(true);
    expect(Øfdream_Sick_And_D('{}{Code}[Fellows](())')).toBe(true);
    expect(Øfdream_Sick_And_D('{}()[][[()]]')).toEqual(true);
    expect(Øfdream_Sick_And_D('(){}[]()')).toEqual(true);
  });
  
  it('return false', ()=> {
    expect(Øfdream_Sick_And_D('(](')).toBe(false);
    expect(Øfdream_Sick_And_D('{(})')).toBe(false);
    expect(Øfdream_Sick_And_D('[({}]')).toBe(false);
    expect(Øfdream_Sick_And_D('[][()(){{}}')).toEqual(false);
  });
});