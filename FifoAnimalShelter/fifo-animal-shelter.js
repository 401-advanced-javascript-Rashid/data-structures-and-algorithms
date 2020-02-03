'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }
  
  enqueue(value) {
    let newNode = new Node(value);
    let frontNode = this.front;
  
    if(!frontNode) { this.front = newNode;
    } else {
      while(frontNode.next) { 
        frontNode = frontNode.next;
      }
      frontNode.next = newNode;
    }
  }
  
  dequeue() {
    let answer;
    if(this.front) {
      answer = this.front.value;
      this.front = this.front.next;
    }
    return answer;
  }
  
  peek() {
    if(this.front) return this.front.value;
    else return null;
  }
  
}

class AnimalShelter {
  constructor() {
    this.turtlesQueue = new Queue();
    this.catsQueue = new Queue();
  }

  enqueue(animal) {

    if(animal.type === 'cat') {
      this.catsQueue.enqueue(animal.name);
    }

    if(animal.type === 'turtle') {
      this.turtlesQueue.enqueue(animal.name);
    }
  }

  dequeue(perf) {

    const cat_Q = this.catsQueue.peek();
    const turtle_Q = this.catsQueue.peek();

    if(perf === 'cat') {
      if(!cat_Q) 
        return 'Cats Shelter is Empty now !!';
      if(cat_Q) 
        return this.catsQueue.dequeue();
    }
    if(perf === 'turtle') {
      if(!turtle_Q)
        return 'Turtles Shelter is Empty now !!';
      if(turtle_Q)
        this.turtlesQueue.dequeue();
    }
  }
}

module.exports = { AnimalShelter , Queue };