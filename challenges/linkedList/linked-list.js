class Node {
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
    let node = new Node(value);
    node.value = value;
    node.next = this.head;
    this.head = node;
    this.size++;
    return this.head;
  }

  ll_merge(i) {
    if(this.size <= i || i < 0) {
      return true;
    }
    let node = this.head;
    for(i; i >= 0; i--){
      if(i === 0) {
        return node.value;
      }
      node = node.next;
    }
  }
}

module.exports = { SuitsLinkedList, Node};