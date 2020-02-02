'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value){
    if(this.front === null){
      this.front = new Node(value, this.rear);
    } else {
      let temp = this.front;
      this.front = new Node(value, temp);
    }
    this.length++;
  }
  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    this.length--;
    return temp;
  }
  peek(){
    return this.front;
  }
}



module.exports = { Queue };