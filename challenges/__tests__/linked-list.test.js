'use strict';

const Mark_List = require('../linkedList/linked-list.js');

describe(' linked list kth from end ',()=>{
  const Iron_Man = new Mark_List.SuitsLinkedList();
  
  it('Where the linked list is of a size 1', () => {
    Iron_Man.insert('Mark-27');
    expect(Iron_Man.kthFromEnd(1)).toBe(true);
    expect(Iron_Man.kthFromEnd(0)).toBe(1);
  });
  it('Where k is greater than the length of the linked list', () => {
    Iron_Man.insert('Mark-21');
    Iron_Man.insert('Mark-22');
    expect(Iron_Man.kthFromEnd(4)).toBe(true);
    expect(Iron_Man.size).toBe(3);
  });

  it('Where k and the length of the list are the same', () => {
    const Iron_Man = new Mark_List.SuitsLinkedList();
    Iron_Man.insert('Mark-23');
    Iron_Man.insert('Mark-24');
    expect(Iron_Man.kthFromEnd(2)).toBe(true);
    expect(Iron_Man.size).toBe(2);
  });

  it('Where k is not a positive integer', () => {
    Iron_Man.insert('Mark-25');
    Iron_Man.insert('Mark-26');
    expect(Iron_Man.kthFromEnd(-1)).toBe(false);
    expect(Iron_Man.size).toBe(5);
  });

  it('where k is not at the end, but somewhere in the middle of the linked list', () => {
    Iron_Man.insert('Mark-28');
    Iron_Man.insert('Mark-29');
    Iron_Man.insert('Mark-30');
    Iron_Man.insert('Mark-31');
    Iron_Man.insert('Mark-32');
    expect(Iron_Man.kthFromEnd(1)).toBe('Mark-31');
    expect(Iron_Man.size).toBe(10);
  });

});