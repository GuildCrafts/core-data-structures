import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {LinkedList, Node} from '../src/linkedList.js'

chai.use(chaiChange)




describe.only('LinkedList', () => {
  'use strict'

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
    it('adds a node to the head of the LinkedList', () => {
      expect(() => linkedList.insertFirst('bananas') )
        .to.alter(() => linkedList.size, { from: 0, to: 1 } )
    })
  })


})
