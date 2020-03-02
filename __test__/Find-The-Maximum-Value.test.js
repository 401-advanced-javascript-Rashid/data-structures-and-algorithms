'use strict';

const { Node, BinaryTree } = require('../challenge/Find-The-Maximum-Value.js');

describe('Bast Iron Man Suit Mark', () => {


  it(`Output it's successfully back the Maximum value `, () => {
    const SuitMark = new BinaryTree();
    SuitMark.root = new Node(9);
    SuitMark.root.left = new Node(5);
    SuitMark.root.left.left = new Node(6);
    SuitMark.root.left.right = new Node(85);
    SuitMark.root.left.right.left = new Node(19);
    SuitMark.root.left.right.right = new Node(38);
    SuitMark.root.right = new Node(35);
    SuitMark.root.right.right = new Node(26);
    SuitMark.root.right.right.left = new Node(12);
    expect(SuitMark.findBestSuit(SuitMark.root)).toEqual(85);
    console.log(SuitMark.findBestSuit(SuitMark.root));
  });
});