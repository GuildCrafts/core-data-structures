
import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'
  const nodeA = new Node( {data: 'apple'} )
  const nodeB = new Node( {data: 'banana'} )

  it('is a function', () => {
      expect(Node).to.be.a('function')
  })

  context('getData()', () => {
      it('gets the data from the node.', () => {
          expect( nodeA.getData() ).to.equal('apple')
    })
  })

  context('setNext()', () => {
      it('points the reference to the next node.', () => {
          expect( () => nodeA.setNext(nodeB) ).to.alter( () => nodeA.data.next, { from: undefined, to: nodeB } )
    })

    it('returns the original.', () => {
        expect( nodeA.setNext(nodeB) ).to.equal(nodeA)
    })
  })

  context('getNext()', () => {
    it('returns the next node', () => {
        nodeA.setNext(nodeB)
        expect( nodeA.getNext() ).to.equal(nodeB)
    })

    it('returns null if no next node.', () => {
        expect( nodeB.getNext() ).to.equal(null)
    })
  })
})
