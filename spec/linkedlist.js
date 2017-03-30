import chai, { expect } from 'chai';
import chaiChange from 'chai-change';
import LinkedList from '../src/linkedlist';

chai.use(chaiChange);

describe('LinkedList', () => {
  'use strict';

  // intiates a new LinkedList before each it() test function call
  let myLinkedList;
  beforeEach(() => {
    myLinkedList = new LinkedList();
  })

  //checks LinkedList is a function
  it('LinkedList is defined as a function', () => {
    expect(LinkedList).to.be.a('function');
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      myLinkedList.insertFirst('bananas');
      expect(myLinkedList.getHeadNode().data).to.equal('bananas');
    })
    it('returns null when there is no first node', () => {
      expect(myLinkedList.getHeadNode()).to.be.null;
    })
  })

  context('insertFirst(data)', () => {
    it('inserts a node to the head of the list', () => {
      myLinkedList.insertFirst('bananas');
      myLinkedList.insertFirst('hello!');
      expect(myLinkedList.getHeadNode().data).to.equal('hello!');
    })
  })

  // note to self: try using or replacing the insertFirst function calls below
  // with the insert function call
  context('getTailNode()', () => {
    it('returns the tail node of the list when it is not null', () => {
      myLinkedList.insertFirst('Hi!');
      myLinkedList.insertFirst('What??');
      expect(myLinkedList.getTailNode().data).to.equal('Hi!');
    })
    it('returns null when there is no tail node to the list', () => {
      expect(myLinkedList.getTailNode()).to.be.null;
    })
    it(`returns the first node as tail node when
      theres only one node in the linked list`, () => {
      myLinkedList.insertFirst('hi');
      expect(myLinkedList.getTailNode().data).to.equal('hi');
    })
  })

  context('insert(data)', () => {
    it('inserts a node to list when list is null', () => {
      myLinkedList.insert('whoa!');
      expect(myLinkedList.getTailNode().data).to.equal('whoa!');
    })
    it(`inserts a node to the tail of the list when list has
      one or more elements`, () => {
      myLinkedList.insert('nice one!');
      myLinkedList.insert('this is it!');
      myLinkedList.insert('check for this');
      expect(myLinkedList.getTailNode().data).to.equal('check for this');
    })
  })

  context('removeFirst()', () => {
    it(`informs that the list is null when
      removeFirst() is called on an empty list`, () => {
        expect(myLinkedList.removeFirst()).to.be.null;
      })
    it('removes the head of the list', () => {
      myLinkedList.insertFirst('whoa!');
      myLinkedList.insert('second one!');
      myLinkedList.removeFirst();
      expect(myLinkedList.getHeadNode().data).to.equal('second one!');
    })
  })

  context('remove()', () => {
    it('returns null when list is empty', () => {
      expect(myLinkedList.remove()).to.be.null;
    })
    it('removes element when there is only one element in the list', () => {
      myLinkedList.insert('yes');
      myLinkedList.remove();
      expect(myLinkedList.getHeadNode()).to.be.null;
    })
    it('removes tail when list has more than one elements', () => {
      myLinkedList.insert('but why?');
      myLinkedList.insert('yes yes no');
      myLinkedList.insertFirst('no way!');
      myLinkedList.remove();
      expect(myLinkedList.getTailNode().data).to.equal('yes yes no');
    })
  })

  context('size()', () => {
    it('increases size by 1', () => {
      myLinkedList.insert('boo');
      expect(() => myLinkedList.insertFirst('foo'))
        .to.alter(() => myLinkedList.size(), { from: 1, to: 2 });
    })
    it('decreases size by 1', () => {
      myLinkedList.insert('boo');
      expect(() => myLinkedList.remove())
        .to.alter(() => myLinkedList.size(), { from: 1, to: 0});
    })
  })

  context('isEmpty()', () => {
    it('returns true if list is empty', () => {
      expect(myLinkedList.isEmpty()).to.be.true;
    })
    it('returns false if list is NOT empty', () => {
      myLinkedList.insertFirst('something!');
      expect(myLinkedList.isEmpty()).to.be.false;
    })
  })

  context('contains(data)', () => {
    it('returns true when data is found in linked list', () => {
      myLinkedList.insert('boo');
      myLinkedList.insert('no way!');
      myLinkedList.insertFirst('bananas!');
      expect(myLinkedList.contains('no way!')).to.be.true;
    })
    it('returns false when data is NOT found in linked list', () => {
      myLinkedList.insert('boo');
      myLinkedList.insert('no way!');
      myLinkedList.insertFirst('bananas!');
      expect(myLinkedList.contains('no!')).to.be.false;
    })
  })

  context('find(data)', () => {
    it('returns the node in the list that matches data', () => {
      myLinkedList.insert('boo');
      myLinkedList.insert('no way!');
      myLinkedList.insertFirst('bananas!');
      expect(myLinkedList.find('bananas!').data).to.equal('bananas!');
    })
    it('returns -1 when node is NOT found in the linked list', () => {
      myLinkedList.insert('boo');
      myLinkedList.insert('no way!');
      myLinkedList.insertFirst('bananas!');
      expect(myLinkedList.find('b!')).to.equal(-1);
    })
  })

  context('clear()', () => {
    it('clears the linked list', () => {
      myLinkedList.insert('boo');
      myLinkedList.insert('no way!');
      myLinkedList.insertFirst('bananas!');
      myLinkedList.clear();
      expect(myLinkedList.getHeadNode()).to.be.null;
      expect(myLinkedList.getTailNode()).to.be.null;
      expect(myLinkedList.size()).to.equal(0);
    })
  })
})
