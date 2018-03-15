import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
// import Node from '../src/node'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', function() {
  'use strict'

  it('exists', function() {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', function() {
    it('returns null when there is no head node', function() {
      const myLinkedList = new LinkedList()
      expect(myLinkedList.getHeadNode()).to.equal(null)
    })

    it('returns the head node', function() {
      const myLinkedList = new LinkedList()
      myLinkedList.insertFirst('hello')

      expect(myLinkedList.getHeadNode().getData()).to.equal('hello')
    })
  })


})

      // expect(() => myLinkedList.push('foo'))
      //   .to.alter(() => myLinkedList.length(), { from: 0, to: 1 })