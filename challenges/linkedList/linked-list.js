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

  insert(value) {
    const new_mark_Node = new MarkNode(value);
    new_mark_Node.next = this.head;
    this.head = new_mark_Node;
    this.size++;
  }

  kthFromEnd(k) {
    let size_of_Suits_list = this.size;
    let mark_Node = this.head;
    let count = 0;

    if(size_of_Suits_list < k || size_of_Suits_list === k) {
      return true;

    } else if(0 > k) {
      return false;

    } else if (size_of_Suits_list <= 1) {
      return 1;

    } else if (size_of_Suits_list - k !== count) {
      mark_Node =mark_Node.next;
      count++;
      return mark_Node.value;
    }
  }
}


module.exports = { MarkNode , SuitsLinkedList } ;