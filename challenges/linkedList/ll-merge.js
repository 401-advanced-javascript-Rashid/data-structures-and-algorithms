'use strict';

const { SuitsLinkedList } = require('./linked-list');

function mergeList(listOne, listTwo) {
  
  const SuitsList = new SuitsLinkedList;

  let lOne = listOne.size - 1;
  let lTwo = listTwo.size - 1;
  let flag = true;

  while(lOne >= 0 && lTwo >= 0) {

    if(flag) {
      SuitsList.insert(listOne.ll_merge(lOne));
      lOne--;
      flag = false;
    } 

    else if(!flag) {
      SuitsList.insert(listTwo.ll_merge(lTwo));
      lTwo--;
      flag = true;
    }
  } 
  
  while(lOne >= 0 && lTwo < 0){
    SuitsList.insert(listOne.ll_merge(lOne));
    lOne--;
  } 
  
  while(lTwo >= 0 && lOne < 0) {
    SuitsList.insert(listTwo.ll_merge(lTwo));
    lTwo--;
  }
  return SuitsList.head;
}

module.exports = mergeList;