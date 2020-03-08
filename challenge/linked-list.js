'use strict';

class Node {
  constructor(value){
    this.val = value ;
    this.next = null ;
  }
}
class LinkedList {

  constructor(){
    this.head = null ;
  }
  insert(value){
    let node = new Node(value);
    node.next = this.head ;
    this.head = node ;
  }

  find(val){
    let current = this.head ; 
    while(current){
      if(current.val[0] === val){
        return current.val[1];
      }
      current= current.next ;
    }  
  }
}

module.exports = new LinkedList ;