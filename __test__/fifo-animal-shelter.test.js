'use strict';

const petShelter = require('../FifoAnimalShelter/fifo-animal-shelter.js').AnimalShelter;

describe('linked list tests', () => { 

  const cat_1 = { type: 'cat' , name: 'Twinkel' };
  const cat_2 = { type: 'cat', name: 'Semsema' };
  const cat_3 = { type: 'cat', name: 'Sagnot' };
  const turtles_1 = { type: 'turtle', name: 'Boby' };
  const turtles_2 = { type: 'turtle', name: 'Spaiek' };
  const turtles_3 = { type: 'turtle', name: 'Osker'};

  it('Enqueues all t and all cats', () => {
    const shelter_1 = new petShelter();
    shelter_1.enqueue(cat_1);
    shelter_1.enqueue(cat_2);
    shelter_1.enqueue(cat_3);
    shelter_1.enqueue(turtles_1);
    shelter_1.enqueue(turtles_2);
    shelter_1.enqueue(turtles_3);
    expect(shelter_1.turtlesQueue.front.next.next.value).toEqual('Osker');
    expect(shelter_1.turtlesQueue.front.next.value).toEqual('Spaiek');
    expect(shelter_1.turtlesQueue.front.value).toEqual('Boby');
    expect(shelter_1.catsQueue.front.next.next.value).toEqual('Sagnot');
    expect(shelter_1.catsQueue.front.next.value).toEqual('Semsema');
    expect(shelter_1.catsQueue.front.value).toEqual('Twinkel');
  });

  it('Dequeues based on pref', () => {
    const shelter_2 = new petShelter();
    shelter_2.enqueue(cat_1);
    shelter_2.enqueue(cat_2);
    shelter_2.enqueue(cat_3);
    shelter_2.enqueue(turtles_1);
    shelter_2.enqueue(turtles_2);
    shelter_2.enqueue(turtles_3);
    shelter_2.dequeue('cat');
    shelter_2.dequeue('turtle');
    expect(shelter_2.catsQueue.front.value).toEqual('Semsema');
    expect(shelter_2.turtlesQueue.front.value).toEqual('Spaiek');
    
  });

  it('returns an error if you try to remove more than are available', () => {
    const shelter_3 = new petShelter();
    shelter_3.enqueue(cat_1);
    shelter_3.enqueue(cat_2);
    shelter_3.enqueue(cat_3);
    shelter_3.enqueue(turtles_1);
    shelter_3.enqueue(turtles_2);
    shelter_3.enqueue(turtles_3);
    shelter_3.dequeue('cat');
    shelter_3.dequeue('cat');
    shelter_3.dequeue('cat');
    shelter_3.dequeue('turtle');
    shelter_3.dequeue('turtle');
    shelter_3.dequeue('turtle');
    expect(shelter_3.dequeue('cat')).toEqual('Cats Shelter is Empty now !!');
    expect(shelter_3.dequeue('turtle')).toEqual('Turtles Shelter is Empty now !!');
  });
});