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
      expect(linkedList.getHeadNode())
        .to.be.eql( { valueOfNode: 'bananas', next: null })
    })
  })

  context('insertFirst()', () => {
    it('adds a node to the head of the LinkedList', () => {
      console.log('this is pre insertFirst ', linkedList)
      expect(() => linkedList.insertFirst('bananas') )
        .to.alter(()=> {
          console.log('this is post insertFirst ', linkedList.getHeadNode());
          linkedList.getHeadNode(),
            {
              from: null,
              to: { valueOfNode: 'bananas', next: null }
            }
        })
    })
  })


})
