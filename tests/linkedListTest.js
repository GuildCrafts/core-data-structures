import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList.js'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it ('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('Returns head node of list', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.getHeadNode()).to.throw(Error)
      myLinkedList.insert('fart')
      myLinkedList.insert('poop')
      expect(myLinkedList.getHeadNode().data).to.equal('fart')
      myLinkedList.removeFirst()
      expect(myLinkedList.getHeadNode().data).to.equal('poop')
    })
  })

  context('contains()', () => {
    it('Returns true if target data is in list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('fart')
      myLinkedList.insert('poop')
      expect(myLinkedList.contains('poop')).to.equal(true)
      expect(myLinkedList.contains('lemonade')).to.equal(false)
    })
  })

  context('contains()', () => {
    it('Returns true if target data is in list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('fart')
      myLinkedList.insert('poop')
      expect(myLinkedList.contains('poop')).to.equal(true)
      expect(myLinkedList.contains('lemonade')).to.equal(false)
    })
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.insert('box'))
        .to.alter(() => myLinkedList.listSize, { from: 0, to: 1})
      myLinkedList.insert('farts')
      myLinkedList.insert('poop')
      myLinkedList.toString()
      expect(myLinkedList.getHeadNode().data).to.equal('box')
      expect(myLinkedList.getTailNode().data).to.equal('poop')
      myLinkedList.insert('last thing')
      expect(myLinkedList.getTailNode().data).to.equal('last thing')
      expect(myLinkedList.listSize).to.equal(4)
      myLinkedList.toString()
    })
  })

  context('insertFirst()', () => {
    it('inserts a node (with the provided data) to the head of the list', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.insertFirst('box'))
      .to.alter(() => myLinkedList.listSize, { from: 0, to: 1})
      myLinkedList.insertFirst('farts')
      myLinkedList.insertFirst('poop')
      myLinkedList.toString()
      expect(myLinkedList.getHeadNode().data).to.equal('poop')
      expect(myLinkedList.getTailNode().data).to.equal('box')
      myLinkedList.insertFirst('first thing')
      expect(myLinkedList.getHeadNode().data).to.equal('first thing')
      myLinkedList.insert('last thing')
      expect(myLinkedList.getTailNode().data).to.equal('last thing')
      myLinkedList.toString()
      expect(myLinkedList.listSize).to.equal(5)
    })
  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('sunshine')
      myLinkedList.insert('rain')
      myLinkedList.toString()
      expect(myLinkedList.find('sunshine').data).to.equal('sunshine')
      expect(myLinkedList.find('pain')).to.equal(-1)
    })
  })

  context('insertBefore()', () => {
    it('Inserts a node with data before the first node containing target data', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('bananas')
      myLinkedList.insertBefore('bananas', 'apples')
      myLinkedList.toString()
      expect(myLinkedList.find('apples').next.data).to.equal('bananas')
      expect(() => myLinkedList.insertBefore('poop', 'shoe')).to.throw(Error)
      expect(myLinkedList.listSize).to.equal(2)
    })
  })

  context('insertAfter()', () => {
    it('Inserts a node with data after the first node containing target data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('farts')
      myLinkedList.insertAfter('farts', 'balls')
      myLinkedList.toString()
      expect(myLinkedList.find('farts').next.data).to.equal('balls')
      myLinkedList.insert('lemons')
      expect(myLinkedList.find('balls').next.data).to.equal('lemons')
      expect(() => myLinkedList.insertAfter('poop', 'shoe')).to.throw(Error)
      expect(myLinkedList.listSize).to.equal(3)
    })
  })

  context('remove()', () => {
    it('Removes tail from list.', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.remove()).to.throw(Error)
      myLinkedList.insert('farts')
      myLinkedList.insert('cheese')
      expect(myLinkedList.getTailNode().data).to.equal('cheese')
      expect(myLinkedList.listSize).to.equal(2)
      myLinkedList.remove()
      expect(myLinkedList.getTailNode().data).to.equal('farts')
      expect(myLinkedList.listSize).to.equal(1)
    })
  })

  // linkedList.removeFirst()
  context('removeFirst()', () => {
    it('Removes head from list.', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.removeFirst()).to.throw(Error)
      myLinkedList.insert('farts')
      myLinkedList.insert('cheese')
      expect(myLinkedList.getTailNode().data).to.equal('cheese')
      expect(myLinkedList.listSize).to.equal(2)
      myLinkedList.removeFirst()
      expect(myLinkedList.getTailNode().data).to.equal('cheese')
      expect(myLinkedList.listSize).to.equal(1)
    })
  })

  context('isEmpty()', () => {
    it('Returns true is List is empty, false otherwise.', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.isEmpty()).to.equal(true)
      myLinkedList.insert('fart')
      expect(myLinkedList.isEmpty()).to.equal(false)
      myLinkedList.remove()
      expect(myLinkedList.isEmpty()).to.equal(true)
    })
  })

  context('size()', () => {
    it('Returns listSize of the List', () => {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.size()).to.equal(0)
      myLinkedList.insert('fart')
      expect(myLinkedList.size()).to.equal(1)
      myLinkedList.remove()
      expect(myLinkedList.size()).to.equal(0)
    })
  })

  context('clear()', () => {
    it('Clears the list of all nodes/data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert('fart')
      myLinkedList.insert('poop')
      myLinkedList.clear()
      expect(myLinkedList.size()).to.equal(0)
    })
  })

})
