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

  it('add a new node to the end of a linked list', () => {

    let Iron_Man = new Mark_List.SuitsLinkedList();
    
    Iron_Man.insert('Mark-4');
    Iron_Man.insert('Mark-5');
    Iron_Man.append('Mark-6');

    expect(Iron_Man.size).toBe(3);
    expect(Iron_Man.head.next.next.value).toBe('Mark-6');
  });

  it('add multiple nodes to the end of a linked list', () => {

    let Iron_Man = new Mark_List.SuitsLinkedList();

    Iron_Man.insert('Mark-7');
    Iron_Man.append('Mark-8');
    Iron_Man.append('Mark-9');

    expect(Iron_Man.size).toBe(3);
    expect(Iron_Man.head.next.value).toBe('Mark-8');
    expect(Iron_Man.head.next.next.value).toBe('Mark-9');
  });

});

describe(' Insert Before linked list ', () => {

  const Iron_Man = new Mark_List.SuitsLinkedList();
  Iron_Man.insert('Mark-9');
  Iron_Man.insert('Mark-10');
  Iron_Man.insert('Mark-12');
  Iron_Man.insert('Mark-13');

  it('insert a node before a node located in the middle of a linked list', () => {

    Iron_Man.insertBefore('Mark-12', 'Mark-11');
    expect(Iron_Man.size).toBe(5);
    expect(Iron_Man.head.next.value).toBe('Mark-11');
  });

  it('insert a node before the first node of a linked list', () => {

    const Iron_Man = new Mark_List.SuitsLinkedList();
    Iron_Man.insert('Mark-9');
    Iron_Man.insertBefore('Mark-9', 'Mark-8');
    expect(Iron_Man.size).toBe(2);
    expect(Iron_Man.head.value).toBe('Mark-8');  
  });

});


describe(' Insert After linked list ', () => {

  let Iron_Man = new Mark_List.SuitsLinkedList();
  Iron_Man.insert('Mark-15');
  Iron_Man.insert('Mark-16');
  Iron_Man.insert('Mark-18');
  Iron_Man.insert('Mark-19');

  it('insert after a node in the middle of the linked list', () => {

    Iron_Man.insertAfter('Mark-16', 'Mark-17');
    expect(Iron_Man.size).toBe(5);
    expect(Iron_Man.head.next.next.next.value).toBe('Mark-17');
  });

  it('insert a node after the last node of the linked list', () => {

    Iron_Man.insertAfter('Mark-19', 'Mark-20');
    expect(Iron_Man.size).toBe(6);
    expect(Iron_Man.head.next.next.next.next.next.value).toBe('Mark-20');
  });

});