import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList.js'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it ('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.insert('box'))
        .to.alter(() => myLinkedList.size, { from: 0, to: 1})
      myLinkedList.insert('farts')
      myLinkedList.insert('poop')
      myLinkedList.toString()
      expect(myLinkedList.getHeadNode().data).to.equal('box')
      expect(myLinkedList.getTailNode().data).to.equal('poop')
      myLinkedList.insert('last thing')
      expect(myLinkedList.getTailNode().data).to.equal('last thing')
      myLinkedList.toString()
    })
  })

  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert('sunshine')
      myLinkedList.insert('rain')
      myLinkedList.toString()
      expect(myLinkedList.find('sunshine').data).to.equal('sunshine')
      console.log(myLinkedList.find())
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
    })
  })

  context('insertFirst()', () => {
    it('inserts a node (with the provided data) to the head of the list', () => {
      const myLinkedList = new LinkedList()
      expect(() => myLinkedList.insertFirst('box'))
        .to.alter(() => myLinkedList.size, { from: 0, to: 1})
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
    })
  })
})
