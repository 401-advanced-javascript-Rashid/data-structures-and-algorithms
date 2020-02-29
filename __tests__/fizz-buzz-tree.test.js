const { fizzBuzzTree, BinarySearchTree } = require('../challenges/fizz-buzz-tree.js');

describe('fizzBuzzTree', () => {
  const Mark = new BinarySearchTree;
  Mark.add(40);
  Mark.add(30);
  Mark.add(60);
  Mark.add(27);
  Mark.add(28);
  Mark.add(72);
  Mark.add(53);
  Mark.add(3);
  
  it('changes values appropriately, and returns a modified tree', () => {
    const result = fizzBuzzTree(Mark);
    expect(result.root.value).toBe('Buzz');
    expect(result.root.left.value).toBe('FizzBuzz');
    expect(result.root.left.left.value).toBe('Fizz');
    expect(result.root.left.left.right.value).toBe(28);
    expect(result.root.left.left.left.value).toBe('Fizz');
    expect(result.root.right.value).toBe('FizzBuzz');
    expect(result.root.right.right.value).toBe('Fizz');
    expect(result.root.right.left.value).toBe(53);
  });

  it('returns an unmodified tree if no values are divisible', () => {
    const result = fizzBuzzTree(Mark);
    expect(result).toEqual(Mark);
  });
});