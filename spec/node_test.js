import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {

  let nodeA = new Node('apple')
  let nodeB = new Node('banana')

  it('exists', () => {
      expect(Node).to.be.a('function')
  })

  context('getData()', () => {
    it('return the data from the node', () => {
      expect( nodeA.getData() ).to.equal('apple')
    })
  })

  context('setNext()', () => {
    it('changes the reference to the next node and returns the original Node', () => {
      nodeA.setNext(nodeB)
      expect( nodeA.setNext(nodeB) ).to.equal(nodeA)
      expect( nodeA.next ).to.equal(nodeB)
    })

  })

  context('getNext()', () => {
    it('returns the next node', () => {
      expect( nodeA.getNext() ).to.equal(nodeB)
    })
    it('null if no next node', () => {
      expect( nodeB.getNext() ).to.equal(null)
    })
  })
})
