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


  context('insertBefore()', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
      const myLinkedList = new LinkedList()

      myLinkedList.insert("apples")
      myLinkedList.insertBefore("bananas", "apples")
      myLinkedList.toString()
      expect(myLinkedList.find('bananas').next).to.deep.equal({
        data: "apples", next: null
      })
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
