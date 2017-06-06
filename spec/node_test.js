import chai, { expect } from 'chai'
import Node from '../src/node'

describe('Node', () => {

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('getData()', () => {
    it('returns the data of the node', () => {
      const dataNode = new Node('phooey')
      expect(dataNode.getData()).to.equal('phooey')
    })
  })

  context('setNext()', () => {
    it('changes the reference to the next node and returns the node', () => {

      const NodeA = new Node({data: "bananas"})
      const NodeB = new Node({data: "more bananas"})
      expect(NodeA.setNext(NodeB)).to.equal(NodeB)
    })
  })

  context('getNext()', () => {
    it('returns the next node, or null if no next node', () => {
      const NoodleNode = new Node()
      const Nodey = new Node()
      NoodleNode.setNext(Nodey)
      expect(NoodleNode.getNext()).to.equal(Nodey)
    })
  })

})
