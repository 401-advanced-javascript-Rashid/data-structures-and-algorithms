'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
  }
  peek(){
    return this.top.value;
  }
  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }
  pop(){
    let popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }
}

module.exports = { Stack };