'use strict';

class MarkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SuitsLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  includes(value) {
    let mark_Node = this.head;
    for(let i = 0; i < this.size; i++) {
      if(mark_Node.value === value) {
        return true;
      } else {
        mark_Node = mark_Node.next;
      }
    } return false;
  }

  insert(value) {
    const new_mark_Node = new MarkNode(value);
    new_mark_Node.next = this.head;
    this.head = new_mark_Node;
    this.size++;
  }

  
  toString() {
    let mark_Node = this.head;
    let string = '';
    for(let i = 0; i < this.size; i++) {
      string = string + mark_Node.value;
      mark_Node = mark_Node.next;
    }
    return string;
  }

  append(value) {
    const new_mark_Node = new MarkNode(value);
    let mark_Node = this.head;
    while(mark_Node.next) {
      mark_Node = mark_Node.next;
    }
    mark_Node.next = new_mark_Node;
    this.size++;
  }

  insertBefore(value, newValue) {
    const new_mark_Node = new MarkNode(newValue);
    if(this.head === null) {
      this.head = new_mark_Node;
      this.size++;
      return this.head;
    }
    if(this.head.value === value) {
      new_mark_Node.next = this.head;
      this.head = new_mark_Node;
    }
    let mark_Node = this.head;
    while(mark_Node.next.value !== value) {
      mark_Node.next = new_mark_Node;
    }
    new_mark_Node.next = mark_Node.next;
    mark_Node.next = new_mark_Node;
    this.size++;
    return new_mark_Node;
  }

  insertAfter(value, newValue) {
    const new_mark_Node = new MarkNode(newValue);
    let mark_Node = this.head;
    if(this.head === null) {
      this.head = new_mark_Node;
      this.size++;
      return this.head;
    }
    while(mark_Node.value !== value) {
      mark_Node = mark_Node.next;
    }
    new_mark_Node.next = mark_Node;
    mark_Node.next = new_mark_Node;
    this.size++;
  }

}



module.exports = { MarkNode , SuitsLinkedList } ;