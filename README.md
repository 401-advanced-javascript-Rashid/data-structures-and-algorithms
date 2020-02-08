## Author: Rashid-Alsawalqa

# Code Challenge // FIFO Animal Shelter

Stands for "First In, First Out." FIFO is a method of processing and retrieving data. In a FIFO system, the first items entered are the first ones to be removed. In other words, the items are removed in the same order they are entered.

## Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/pull/8)
- [ci/cd](https://github.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/runs/424239312?check_suite_focus=true)

## Setup

   - eslint: 6.8.0
   - jest: 25.1.0

## How to initialize/run your application (where applicable)

- 'npm test'

## Challenge

We needed to first create a node constructor, and then the AnimalShelter and the queue classes. 

- Enqueue: adds a node to the rear of he queue .
- dequeue: removes a node from the front .

## Approach & Efficiency

Similar to PsuedoQueue instantiate two stacks enqueue takes animal value, either cat or dog, pushes it onto the inStack dequeue(pref): if value pref at top of outStack, it pops off top value go through pref to find pref. if there is no value on outStack, then it goes to inStack and takes value off top of inStack and pushes to outStack (first in first out) if there is no value called, pop off longest pet in shelter. if no animal equal to preference, return undefined

## Big O

here we have two methods for enqueue we just use the back property and set it next to the new object so O(1), for dequeue we just change the front to it next object and thats it so O(1) .

## UML 

https://raw.githubusercontent.com/401-advanced-javascript-Rashid/data-structures-and-algorithms/fifo-animal-shelter/assest/20200209_001637.jpg
