'use strict';

const { Suit, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('make tree testing', () => {
  const SuitsTree = new BinaryTree();

  it('can successfully make an empty tree with a single root', () => {
    expect(SuitsTree.root).toBe(null);
  });

  it('can successfully make a tree with right and left child', () => {
    SuitsTree.root = new Suit('root');
    expect(SuitsTree.root.value).toBe('root');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    SuitsTree.root = new Suit('root');
    SuitsTree.root.left = new Suit('left');
    SuitsTree.root.right = new Suit('right');
    expect(SuitsTree.root.value).toBe('root');
    expect(SuitsTree.root.left.value).toBe('left');
    expect(SuitsTree.root.right.value).toBe('right');
  });

});



describe('return tree from postorder and inorder traversal testing', () => {
  const Suits = new BinaryTree();
    
  Suits.root = new Suit('Mark-06');
  Suits.root.left = new Suit('Mark-02');
  Suits.root.right = new Suit('Mark-07');
  Suits.root.left.left = new Suit('Mark-01');
  Suits.root.left.right = new Suit('Mark-04');
  Suits.root.right.right = new Suit('Mark-09');
  Suits.root.left.right.left = new Suit('Mark-03');
  Suits.root.left.right.right = new Suit('Mark-05');
  Suits.root.right.right.left = new Suit('Mark-08');
      

  it('can successfully return a collection from an inorder traversal', () => {
    expect(Suits.preOrder(Suits.root)).toEqual([
      'Mark-06',
      'Mark-02',
      'Mark-01',
      'Mark-04',
      'Mark-03',
      'Mark-05',
      'Mark-07',
      'Mark-09',
      'Mark-08']);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    expect(Suits.inOrder(Suits.root)).toEqual([
      'Mark-01',
      'Mark-02',
      'Mark-03',
      'Mark-04',
      'Mark-05',
      'Mark-06',
      'Mark-07',
      'Mark-08',
      'Mark-09']);
  });

});



describe('add and locate value testing', () => {
  const Suits = new BinarySearchTree();

  Suits.root = new Suit('Mark-06');
  Suits.root.left = new Suit('Mark-02');
  Suits.root.right = new Suit('Mark-07');
  Suits.root.left.left = new Suit('Mark-01');
  Suits.root.left.right = new Suit('Mark-04');
  Suits.root.right.right = new Suit('Mark-09');
  Suits.root.left.right.left = new Suit('Mark-03');
  Suits.root.left.right.right = new Suit('Mark-05');
  Suits.root.right.right.left = new Suit('Mark-08');

  it('can successfully add a Suit with a certain value to where it is supposed to go', () => {
    Suits.add('Mark-03');
    expect(Suits.root.left.right.left.value).toBe('Mark-03');
  });

  it('can successfully locate a Suit with the value provided', () => {
    expect(Suits.contains('Mark-45')).toBe(false);
    expect(Suits.contains('Mark-03')).toBe(true);
  });

});