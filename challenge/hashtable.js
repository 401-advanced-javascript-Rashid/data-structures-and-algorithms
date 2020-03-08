'use strict';

const ll = require('./linked-list.js');



class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }


  hash(key) {
    let hashedKey = key.split('').reduce((acc, val, idx) => {
      return acc += val.charCodeAt(0);
    }, 0) * 19 % this.size;
    return hashedKey;
  }

  add(key, value) {
    if (!this.table[this.hash(key)]) {
      ll.insert([key, value]);
      this.table[this.hash(key)] = ll;
    } else {
      this.table[this.hash(key)].insert([key, value]);
    }
  }
  get(key) {
    let result = this.table[this.hash(key)];
    if (result) {
      return result.find(key);
    } else {
      return null;
    }
  }

  contain(key) {
    if (this.table[this.hash(key)]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = HashTable;