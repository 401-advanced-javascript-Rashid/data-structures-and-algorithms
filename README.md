# Challenge Summary

## Class 15 -- tree

## Challenge Description

Create Node class that has left and right child nodes create a BinaryTree class methods: preOrder, inOrder, and postOrder create a BinarySearchTree class methods: add, adds a new node with value in correct location, contains, accepts value and returns boolean if value is in tree at least once

## Approach & Efficiency

For the approach of this challenge, I created a Node class, and a Binary Tree class that had preOrder(), postOrder(), and inOrder() methods in it. Each of these methods traverse the Binary Tree in different ways. I then created a Binary Search Tree class that extends the Binary Tree class. This contains the add() and contains() methods, which add a new Node to a tree, and search to see if the Tree contains a specific value, respectively.

## API

For BinaryTree class we have 3 methods 
- preOrder() where we push each node value at time we reach it .
- postOrder() where we start pushing the node value when it have no left and right value .
- inOrder() start pushing the node value if it have no left value .   




