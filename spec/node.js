import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('setNext()', () => {
    it('Changes the next node in queue and returns current node', () => {

const nodeA = new Node({data: "apple"})
const nodeB = new Node({data: "banana"})

      expect(() => nodeA.setNext(nodeB))
        .to.alter(() => nodeA.next, { from: null, to: nodeB })
    })
    context('getNext()', () => {
      it('returns the value of the next object in queue', () => {
        expect(() => nodeA.getNext().to.equal({nodeB}))
      })
    })
  })
})
