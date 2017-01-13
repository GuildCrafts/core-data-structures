import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doublyLinkedList.js'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  'use strict'

  it ('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('Returns head node of list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(() => myDoublyLinkedList.getHeadNode()).to.throw(Error)
      myDoublyLinkedList.insert('fart')
      myDoublyLinkedList.insert('poop')
      expect(myDoublyLinkedList.getHeadNode().data).to.equal('fart')
      myDoublyLinkedList.removeFirst()
      expect(myDoublyLinkedList.getHeadNode().data).to.equal('poop')
    })
  })

  context('contains()', () => {
    it('Returns true if target data is in list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert('fart')
      myDoublyLinkedList.insert('poop')
      expect(myDoublyLinkedList.contains('poop')).to.equal(true)
      expect(myDoublyLinkedList.contains('lemonade')).to.equal(false)
    })
  })

  context('contains()', () => {
    it('Returns true if target data is in list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert('fart')
      myDoublyLinkedList.insert('poop')
      expect(myDoublyLinkedList.contains('poop')).to.equal(true)
      expect(myDoublyLinkedList.contains('lemonade')).to.equal(false)
    })
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(() => myDoublyLinkedList.insert('box'))
        .to.alter(() => myDoublyLinkedList.listSize, { from: 0, to: 1})
      myDoublyLinkedList.insert('farts')
      myDoublyLinkedList.insert('poop')
      expect(myDoublyLinkedList.getHeadNode().data).to.equal('box')
      expect(myDoublyLinkedList.getTailNode().data).to.equal('poop')
      expect(myDoublyLinkedList.getTailNode().prev.data).to.equal('farts')
      myDoublyLinkedList.insert('last thing')
      expect(myDoublyLinkedList.getTailNode().data).to.equal('last thing')
      expect(myDoublyLinkedList.getTailNode().prev.data).to.equal('poop')
      expect(myDoublyLinkedList.listSize).to.equal(4)
    })
  })

  context('insertFirst()', () => {
    it('inserts a node (with the provided data) to the head of the list', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(() => myDoublyLinkedList.insertFirst('box'))
      .to.alter(() => myDoublyLinkedList.listSize, { from: 0, to: 1})
      myDoublyLinkedList.insertFirst('farts')
      myDoublyLinkedList.insertFirst('poop')
      expect(myDoublyLinkedList.getHeadNode().data).to.equal('poop')
      expect(myDoublyLinkedList.getTailNode().data).to.equal('box')
      expect(myDoublyLinkedList.getTailNode().prev.data).to.equal('farts')
      myDoublyLinkedList.insertFirst('first thing')
      expect(myDoublyLinkedList.getHeadNode().next.data).to.equal('poop')
      myDoublyLinkedList.insert('last thing')
      expect(myDoublyLinkedList.getTailNode().data).to.equal('last thing')
      expect(myDoublyLinkedList.getTailNode().prev.data).to.equal('box')
      myDoublyLinkedList.toString()
      expect(myDoublyLinkedList.listSize).to.equal(5)
    })
  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const myDoublyLinkedList = new DoublyLinkedList()

      myDoublyLinkedList.insert('sunshine')
      myDoublyLinkedList.insert('rain')
      myDoublyLinkedList.toString()
      expect(myDoublyLinkedList.find('sunshine').data).to.equal('sunshine')
      expect(myDoublyLinkedList.find('sunshine').next.data).to.equal('rain')
      expect(myDoublyLinkedList.find('rain').prev.data).to.equal('sunshine')
      expect(myDoublyLinkedList.find('pain')).to.equal(-1)
    })
  })

  context('insertBefore()', () => {
    it('Inserts a node with data before the first node containing target data', () => {
      const myDoublyLinkedList = new DoublyLinkedList()

      myDoublyLinkedList.insert('bananas')
      myDoublyLinkedList.insertBefore('bananas', 'apples')
      expect(myDoublyLinkedList.find('apples').next.data).to.equal('bananas')
      expect(myDoublyLinkedList.find('bananas').prev.data).to.equal('apples')
      expect(() => myDoublyLinkedList.insertBefore('poop', 'shoe')).to.throw(Error)
      myDoublyLinkedList.insertBefore('bananas', 'farts')
      expect(myDoublyLinkedList.find('farts').next.data).to.equal('bananas')
      expect(myDoublyLinkedList.find('bananas').prev.data).to.equal('farts')
      myDoublyLinkedList.toString()
      expect(myDoublyLinkedList.listSize).to.equal(3)
    })
  })

  context('insertAfter()', () => {
    it('Inserts a node with data after the first node containing target data', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert('farts')
      myDoublyLinkedList.insertAfter('farts', 'balls')
      myDoublyLinkedList.toString()
      expect(myDoublyLinkedList.find('balls').prev.data).to.equal('farts')
      expect(myDoublyLinkedList.find('farts').next.data).to.equal('balls')
      myDoublyLinkedList.insert('lemons')
      expect(myDoublyLinkedList.find('lemons').prev.data).to.equal('balls')
      expect(myDoublyLinkedList.find('balls').next.data).to.equal('lemons')
      expect(() => myDoublyLinkedList.insertAfter('poop', 'shoe')).to.throw(Error)
      expect(myDoublyLinkedList.listSize).to.equal(3)
    })
  })

  context('remove()', () => {
    it('Removes tail from list.', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(() => myDoublyLinkedList.remove()).to.throw(Error)
      myDoublyLinkedList.insert('farts')
      myDoublyLinkedList.remove()
      myDoublyLinkedList.insert('cheese')
      expect(myDoublyLinkedList.getTailNode().data).to.equal('cheese')
      expect(myDoublyLinkedList.listSize).to.equal(1)
      myDoublyLinkedList.remove()
    })
  })

  // doublyLinkedList.removeFirst()
  context('removeFirst()', () => {
    it('Removes head from list.', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(() => myDoublyLinkedList.removeFirst()).to.throw(Error)
      myDoublyLinkedList.insert('farts')
      myDoublyLinkedList.insert('cheese')
      expect(myDoublyLinkedList.getTailNode().data).to.equal('cheese')
      expect(myDoublyLinkedList.listSize).to.equal(2)
      myDoublyLinkedList.removeFirst()
      expect(myDoublyLinkedList.getTailNode().data).to.equal('cheese')
      expect(myDoublyLinkedList.listSize).to.equal(1)
    })
  })

  context('isEmpty()', () => {
    it('Returns true is List is empty, false otherwise.', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(myDoublyLinkedList.isEmpty()).to.equal(true)
      myDoublyLinkedList.insert('fart')
      expect(myDoublyLinkedList.isEmpty()).to.equal(false)
      myDoublyLinkedList.remove()
      expect(myDoublyLinkedList.isEmpty()).to.equal(true)
    })
  })

  context('size()', () => {
    it('Returns listSize of the List', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      expect(myDoublyLinkedList.size()).to.equal(0)
      myDoublyLinkedList.insert('fart')
      expect(myDoublyLinkedList.size()).to.equal(1)
      myDoublyLinkedList.remove()
      expect(myDoublyLinkedList.size()).to.equal(0)
    })
  })

  context('clear()', () => {
    it('Clears the list of all nodes/data', () => {
      const myDoublyLinkedList = new DoublyLinkedList()
      myDoublyLinkedList.insert('fart')
      myDoublyLinkedList.insert('poop')
      myDoublyLinkedList.clear()
      expect(myDoublyLinkedList.size()).to.equal(0)
    })
  })

})
