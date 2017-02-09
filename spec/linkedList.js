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

    it.only('adds a node to the front of the linkedList and updates head ', () => {
      linkedList.insertFirst('bananas')
      linkedList.insertFirst('pineapple')
      console.log('final linkedList', linkedList);
      expect(linkedList.getHeadNode())
        .to.be.eql( { valueOfNode: 'pineapple', next: 'bananas'})
    })
  })

  // context('getTailNode()', () => {
  //   it('returns null if no nodes exist', () => {
  //     expect(linkedList.getTailNode()).to.be.equal(null)
  //   })
  //
  //   it('returns the final node of LinkedList', () => {
  //     linkedList.insertFirst('bananas')
  //     linkedList.insertFirst('green apples')
  //     linkedList.insertFirst('crab apples')
  //     console.log('the list', linkedList);
  //     expect(linkedList.getTailNode()).to.be.eql( { valueOfNode: 'crab apples', next: null })
  //   })
  // })


})
