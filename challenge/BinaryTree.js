'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  preOrder(node) {
    let stack = [];
    let result = [];
    stack.push(node);
    while(stack.length > 0) {
      let current = stack.pop();
      result.push(current.value);
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
    }
    return result;
  }
}


module.exports = { Node, BinaryTree};
  