'use strict';

const Stack = require('../QueueWithStacks/queue-with-stacks.js').Stack;

describe('Stack tests results', () => {
  let stack = new Stack;
  it('Instantiate an empty stack', () => {
    expect(stack.top).toBeNull();
  });
  
  it('Push onto a stack', () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it('Push multiple values onto a stack', () => {
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  it('Pop off the stack', () => {
    stack.pop(3);
    expect(stack.top.next.next).toBeNull();
  });

  it('Empty a stack after multiple pops', () => {
    stack.pop(2);
    stack.pop(1);
    expect(stack.top).toBeNull();
    expect(stack.length).toBeUndefined();
  });

  it('Peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });

});

const Queue = require('../Queues/queues.js').Queue;

describe('Queue tests results', () => {
  let queue = new Queue;
  it('Instantiate an empty queue', () => {   
    expect(queue.front).toBeNull();
  });

      
  it('Enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  it('Enqueue multiple values into a queue', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    expect(queue.length).toEqual(6);
  });

  it('Dequeue out of a queue the expected value', () => {
    queue.enqueue(7);
    queue.enqueue(8);
    queue.enqueue(9);
    queue.dequeue();
    expect(queue.peek()).toBeNull();
    expect(queue.length).toEqual(8);
  });

  it('Peek into a queue, seeing the expected value', () => {
    queue.enqueue(0);
    expect(queue.peek().value).toEqual(0);
    expect(queue.length).toEqual(9);
  });
  
});

const PseudoQueue = require('../QueueWithStacks/queue-with-stacks.js').PseudoQueue;

describe('stacks and queues testing', () => {
  const queue = new PseudoQueue();
  
  it('Enqueue nodes', () => {
    queue.stack1.push(1);
    queue.stack1.push(2);
    queue.enqueue(3);
    expect(queue.stack1.top.value).toEqual(2);
    expect(queue.stack1.top.next.next.value).toEqual(3);
  });

  it('dequeue the last value and returns', () => {
    const result = queue.dequeue();
    expect(result).toEqual(3);
  });
});