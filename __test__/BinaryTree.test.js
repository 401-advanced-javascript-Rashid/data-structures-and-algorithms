'use strict';

const { Node, BinaryTree } = require('../challenge/BinaryTree.js');

describe('Iron Man Suit Mark testing', () => {


  it(`Output it's successfully back as array `, () => {
    const SuitMark = new BinaryTree();
    SuitMark.root = new Node('M-10');
    SuitMark.root.left = new Node('M-08');
    SuitMark.root.left.left = new Node('M-05');
    SuitMark.root.left.right = new Node('M-06');
    SuitMark.root.left.right.left = new Node('M-04');
    SuitMark.root.left.right.right = new Node('M-07');
    SuitMark.root.right = new Node('M-15');
    SuitMark.root.right.right = new Node('M-20');
    SuitMark.root.right.right.left = new Node('M-17');
    expect(SuitMark.preOrder(SuitMark.root)).toEqual(['M-10', 'M-08','M-05','M-06', 'M-04','M-07','M-15','M-20','M-17']);
    console.log(SuitMark.preOrder(SuitMark.root));
  });
});