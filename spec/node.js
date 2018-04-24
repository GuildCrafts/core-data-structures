import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'

  it('exists', () => {
    expect(Node).to.be.a('function')
  })

  context('getData()', function() {
    it('returns the node\'s data', function() {
      const myNode = new Node({data: 'hello'})

      expect(myNode.getData()).to.equal('hello')
    })
  })

  context('getNext()', function() {
    it('returns null if next node is not set', function() {
      const myNode = new Node({data: 'hello'})

      expect(myNode.getNext())
        .to.equal(null)
    })

    it('returns next node if set', function() {
      const aNode = new Node({data: 'world'})
      const myNode = new Node({data: 'hello', next: aNode })

      expect(myNode.getNext())
        .to.equal(aNode)
    })
  })

  context('setNext()', function() {
    it('sets next node', function() {
      const myNode = new Node({data: 'hello'})
      const newNode = new Node({data: 'world'})

      expect(() => myNode.setNext(newNode))
        .to.alter(() => myNode.getNext(), { from: null, to: newNode })
    })
  })
})
