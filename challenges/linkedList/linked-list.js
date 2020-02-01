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
    const new_mark_NodeNode = new MarkNode(value);
    new_mark_NodeNode.next = this.head;
    this.head = new_mark_NodeNode;
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
}

module.exports = { MarkNode , SuitsLinkedList } ;