'use strict';

const mergeList = require('../linkedList/ll-merge');
const { SuitsLinkedList } = require('../linkedList/linked-list');

describe('merge list', () => {
  
  const SuitsListOne = new SuitsLinkedList;
  SuitsListOne.insert('Mark 01');
  SuitsListOne.insert('Mark 03');

  const SuitsListTwo = new SuitsLinkedList;
  SuitsListTwo.insert('Mark 02');
  SuitsListTwo.insert('Mark 04');

  it('will zip up two lists of equal length', () => {
    const result = mergeList(SuitsListOne, SuitsListTwo);
    expect(result.value).toBe('Mark 04');
    expect(result.next.value).toBe('Mark 03');
    expect(result.next.next.value).toBe('Mark 02');
    expect(result.next.next.next.value).toBe('Mark 01');
  });

  it('will zip up two lists of unequal length', () => {
    SuitsListOne.insert('Mark 05');
    const result = mergeList(SuitsListOne, SuitsListTwo);
    expect(result.value).toBe('Mark 05');
    expect(result.next.value).toBe('Mark 04');
    expect(result.next.next.value).toBe('Mark 03');
    expect(result.next.next.next.value).toBe('Mark 02');
    expect(result.next.next.next.next.value).toBe('Mark 01');
  });
});