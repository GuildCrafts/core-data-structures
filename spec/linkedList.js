import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {LinkedList, Node} from '../src/linkedList.js'

chai.use(chaiChange)




describe('LinkedList', () => {
  'use strict'

  // context('Node', () => {
  //   it('returns the value of the node', () => {
  //     const node = new Node()
  //     expect(node.valueOfNode).
  //   })
  // })

  let linkedList
  beforeEach('invokes a new LinkedList before each test', () => {
    linkedList = new LinkedList()
  })

  it('exist', () => {
    expect(LinkedList).to.be.a('function')
  })

  it('Node exist', () => {
    expect(Node).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns null if first node does not exist', () => {
      expect(linkedList.getHeadNode()).to.be.equal(null)
    })

    it('returns the first node', () => {
      linkedList.insertFirst('bananas')
      expect(linkedList.getHeadNode())
        .to.be.eql( { valueOfNode: 'bananas', next: null })
    })
  })

  context('insertFirst()', () => {
    it('adds a node to the head of the empty LinkedList', () => {
      expect(() => linkedList.insertFirst('bananas') )
        .to.alter(() => linkedList.size, { from: 0, to: 1 } )
    })

    it('adds a node to the front of the linkedList and updates head ', () => {
      linkedList.insertFirst('bananas')
      linkedList.insertFirst('pineapple')
      expect(linkedList.getHeadNode())
        .to.be.eql( { valueOfNode: 'pineapple', next: {valueOfNode: 'bananas', next: null}})
    })
  })

  context.only('insert()', () => {
    it('adds a node to the tail of the empty LinkedList', () => {
      expect(() => linkedList.insert('bananas') )
        .to.alter(() => linkedList.size, { from: 0, to: 1 } )
    })
     it('adds a node to the end of the linkedList and updates prior end node next value', () => {
       linkedList.insert('pineapple')
       linkedList.insert('pickle')
       expect(linkedList.getTailNode())
         .to.be.eql( { valueOfNode: 'pickle', next: null } )
     })
  })

  context('getTailNode()', () => {
    it('returns null if no nodes exist', () => {
      expect(linkedList.getTailNode()).to.be.equal(null)
    })

    it('returns the final node of LinkedList', () => {
      linkedList.insertFirst('bananas')
      linkedList.insertFirst('green apples')
      linkedList.insertFirst('crab apples')
      expect(linkedList.getTailNode()).to.be.eql( { valueOfNode: 'bananas', next: null })
    })
  })

  context('contains()', () => {
    it('returns true if the list has the value', () => {
      linkedList.insertFirst('bana')
      linkedList.insertFirst('banas')
      linkedList.insertFirst('bananas')
      expect(linkedList.contains('bananas')).to.be.equal(true)
    })

    it('returns false if the list does not have the value', () => {
      linkedList.insertFirst('green apples')
      expect(linkedList.contains('bananas')).to.be.equal(false)
    })
  })

  context('finds()', () => {
    it('returns the first node containing the data', () => {
      linkedList.insertFirst('apple')
      linkedList.insertFirst('bananas')
      linkedList.insertFirst('cucumber')
      expect(linkedList.find('bananas')).to.be.eql( { valueOfNode: 'bananas', next: { valueOfNode: 'apple', next: null } } )
    })

    it('returns -1 if the value is not found', () => {
      linkedList.insertFirst('green apples')
      expect(linkedList.find('bananas')).to.be.equal(-1)
    })
  })

})
