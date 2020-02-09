'use strict';


function multiBracketValidation(input) {

  const inputObjects = { '[' : ']' , '{' : '}' , '(' : ')' };
  const arr = [];

  for( let i = 0; i < input.length; i++ ) { 
    if( input[i] === '[' || input[i] === '{' || input[i] === '(' ) {
      arr.push( input[i] );  
    } 
    else if( input[i] === ']' || input[i] === '}' || input[i] === ')' ) {
      if( input[i] !== inputObjects[arr.pop()] ) {
        return false;
      }
    }
  }
  if( arr.length !== 0 ) {
    return false;
  }
  return true;
}
  
module.exports = multiBracketValidation;