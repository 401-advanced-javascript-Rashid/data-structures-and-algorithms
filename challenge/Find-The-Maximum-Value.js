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
  
  findBestSuit() {
    function bestSuit(node) {
      let left;
      let right;
      if(node.left) {
        left = bestSuit(node.left);
      } else {
        left = node.value;
      }
      if(node.right) {
        right = bestSuit(node.right);
      } else {
        right = node.value;
      }
      if(left > right && left > node.value) {
        return left;
      } else if(right > left && right > node.value) {
        return right;
      } 
      return node.value;
    }
    return bestSuit(this.root);
  }
}

module.exports = { Node, BinaryTree};
  