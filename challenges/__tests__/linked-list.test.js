'use strict';

const Mark_List = require('../linkedList/linked-list.js');

describe('linked list', () => {

  let Iron_Man = new Mark_List.SuitsLinkedList();

  it('Can successfully instantiate an empty linked list', () => {
    const result = { head: null, size: 0 };
    expect(Iron_Man).toEqual(result);
  });

  it('Can properly insert into the linked list', () => {
    expect(Iron_Man.size).toEqual(0);
    Iron_Man.insert('Mark-85');
    expect(Iron_Man.size).toBe(1);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let Iron_Man = new Mark_List.SuitsLinkedList();
    Iron_Man.insert('Mark-42');
    const result = { value: 'Mark-42', next: null };
    expect(Iron_Man.head).toEqual(result);
  });

  it('Can insert multiple nodes into the linked list', () => {
    let Iron_Man = new Mark_List.SuitsLinkedList();
    Iron_Man.insert('Mark-1');
    const first = { value: 'Mark-1', next: null };
    Iron_Man.insert('Mark-2');
    const second = { value: 'Mark-2', next: first };
    Iron_Man.insert('Mark-3');
    const third = { value: 'Mark-3', next: second };
    expect(Iron_Man.head).toEqual(third);
    expect(Iron_Man.head.next).toEqual(second);
    expect(Iron_Man.head.next.next).toEqual(first);
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    Iron_Man.insert('Mark-85');
    const value = Iron_Man.head.value;
    expect(Iron_Man.includes(value)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    Iron_Man.insert('Mark-3');
    expect(Iron_Man.includes('wrong')).toBe(false);
  });
  
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    Iron_Man.insert( 'Mark-3' , 'Mark-85' );
    expect(Iron_Man.head.value.toString()).toBe( 'Mark-3', 'Mark-85' );
  });
});