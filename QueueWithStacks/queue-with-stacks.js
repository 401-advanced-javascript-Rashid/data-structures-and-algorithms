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
    if(!this.top){
      return null;
    }
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

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  
  dequeue() {
    while(
      this.stack1.top.next) {
      const s_in = this.stack1.pop();
      this.stack2.push(s_in);
    }
    const Result = this.stack1.pop();
    while(
      this.stack2.peek()) {
      const s_out = this.stack2.pop();
      this.stack1.push(s_out);
    }
    return Result;
  }
  
  enqueue(value) {
    while(
      this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    } 
    this.stack1.push(value);
    while(
      this.stack2.peek()
    ) {
      this.stack1.push(this.stack2.pop());
    }
  }
} 


module.exports = { Stack , PseudoQueue};