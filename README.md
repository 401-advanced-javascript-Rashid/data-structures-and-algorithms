## Author: Rashid-Alsawalqa

# Code Challenge // Stacks and Queues

Stacks. A stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle. ... A stack is a limited access data structure - elements can be added and removed from the stack only at the top. push adds an item to the top of the stack, pop removes the item from the top.

_________________________

Queues are data structures that follow the First In First Out (FIFO) i.e. the first element that is added to the queue is the first one to be removed.
Elements are always added to the back and removed from the front. Think of it as a line of people waiting for a bus. The person who is at the beginning of the line is the first one to enter the bus.

## Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/pull/6)
- [ci/cd](https://github.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/runs/422024476?check_suite_focus=true)

## Setup

   - eslint: 6.8.0
   - jest: 25.1.0

## How to initialize/run your application (where applicable)

- 'npm test'

## Challenge

We needed to first create a node constructor, and then the stack and the queue classes. 

### Stack would need three methods: 
- push: adding a node to the top of the stack .
- pop: removing a node off the top of the stack .
- peek: which checks and returns the value of the node at the top.

### For queues :
- Enqueue: adds a node to the rear of he queue .
- dequeue: removes a node from the front .
- peek: which checks and returns the front node .

## Approach & Efficiency

By assigning values and pointers upon instatiation, we are able to readily target any nodes necessary to execute the functions.
All of theses methods have a big O of O(1) as they are readily accesible regardless of the length or depth of the queue or stack. 

## UML 
