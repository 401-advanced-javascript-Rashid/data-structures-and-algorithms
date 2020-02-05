'use strict';

const petShelter = require('../FifoAnimalShelter/fifo-animal-shelter.js').AnimalShelter;

let shelter;

const cat_1 = { type: 'cat' , name: 'Twinkel' };
const cat_2 = { type: 'cat', name: 'Semsema' };
const cat_3 = { type: 'cat', name: 'Sagnot' };
const turtles_1 = { type: 'turtle', name: 'Boby' };
const turtles_2 = { type: 'turtle', name: 'Spaiek' };
const turtles_3 = { type: 'turtle', name: 'Osker'};

beforeEach(() => {

  shelter = new petShelter();
  shelter.enqueue(cat_1);
  shelter.enqueue(cat_2);
  shelter.enqueue(cat_3);
  shelter.enqueue(turtles_1);
  shelter.enqueue(turtles_2);
  shelter.enqueue(turtles_3);

});

describe('linked list tests', () => { 


  test('Enqueues all t and all cats', () => {
    expect(shelter.turtlesQueue.front.next.next.value).toEqual('Osker');
    expect(shelter.turtlesQueue.front.next.value).toEqual('Spaiek');
    expect(shelter.turtlesQueue.front.value).toEqual('Boby');
    expect(shelter.catsQueue.front.next.next.value).toEqual('Sagnot');
    expect(shelter.catsQueue.front.next.value).toEqual('Semsema');
    expect(shelter.catsQueue.front.value).toEqual('Twinkel');
  });

  it('Dequeues based on pref', () => {
    shelter.dequeue('cat');
    shelter.dequeue('turtle');
    expect(shelter.catsQueue.front.value).toEqual('Semsema');
    expect(shelter.turtlesQueue.front.value).toEqual('Spaiek');
    
  });

  it('returns an error if you try to remove more than are available', () => {
    shelter.dequeue('cat');
    shelter.dequeue('cat');
    shelter.dequeue('cat');
    shelter.dequeue('turtle');
    shelter.dequeue('turtle');
    shelter.dequeue('turtle');
    expect(shelter.dequeue('cat')).toEqual('Cats Shelter is Empty now !!');
    expect(shelter.dequeue('turtle')).toEqual('Turtles Shelter is Empty now !!');
  });
});