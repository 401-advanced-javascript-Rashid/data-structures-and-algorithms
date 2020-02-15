class Suit {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(Suit) {
    if(Suit === null) 
      return [];

    let Mark = [];
    let IronMan = [];
    Mark.push(Suit);
    while(Mark.length > 0) {
      let current = Mark.pop();
      IronMan.push(current.value);
      if(current.right) Mark.push(current.right);
      if(current.left) Mark.push(current.left);
    }
    return IronMan;
  }

  inOrder(Suit) {
    if(Suit === null) return [];
    let IronMan = [];
    let Mark = [];
    let pointerNode = Suit;

    while(Mark.length !== 0 || pointerNode !== null) {
      if(pointerNode !== null) {
        Mark.push(pointerNode);
        pointerNode = pointerNode.left;
      } else {
        pointerNode = Mark.pop();
        IronMan.push(pointerNode.value);
        pointerNode = pointerNode.right;
      }
    }
    return IronMan;
  }

  postOrder(Suit) {
    if(Suit === null) return [];
    let IronMan = [];
    let Mark = [];
    Mark.push(Suit);
    while(Mark.length !== 0) {
      let pointer = Mark.pop();

      IronMan.unshift(pointer.value);
      if(pointer.left) {
        Mark.push(pointer.left);
      }
      if(pointer.right) {
        Mark.push(pointer.right);
      }
    }
    return IronMan;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    return recurse(value, this.root);
  }
  contains(value) {
    return recurseFind(value, this.root);
  }
}

function recurse(value, suit) {
  let direction;
  value > suit.value ? direction = 'right' : direction = 'left';
  if(suit[direction]) {
    return recurse(value, suit[direction]);
  }
  return suit[direction] = new Suit(value);
}

function recurseFind(value, suit) {
  let direction;
  let checkVal = value === suit.value;
  if(checkVal) 
    return true;
  value > suit.value ? direction = 'right' : direction = 'left';
  if(suit[direction]) 
    return recurseFind(value, suit[direction]);
  else 
    return false;
}

module.exports = {
  Suit,
  BinaryTree,
  BinarySearchTree,
};