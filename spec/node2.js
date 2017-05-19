import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node2'

chai.use(chaiChange)

describe('Node2', function() {
  'use strict'

  it('is a function', function() {
    expect(Node).to.be.a('function')
  })

  context('getData()', function() {
    const dsNode = new Node({data: 'string'})
    const dnNode = new Node({data: 0})
    const daNode = new Node({data: [1, 2]})
    const doNode = new Node({data: {'a': 1, 'b': 2}})
    const emptyNode = new Node()
    const ngNode = new Node({data: 1, next: dsNode})
    const nbNode = new Node({data: 2, next: "dnNode"})
    const ngbNode = new Node({data: 3, next: nbNode})
    it('returns the correct type, if a string', function() {
      expect(dsNode.getData()).to.be.a('string')
    })
    it('returns the correct value, if a string', function() {
      expect(dsNode.getData()).to.be.equal('string')
    })
    it('returns the correct type, if a number', function() {
      expect(dnNode.getData()).to.be.a('number')
    })
    it('returns the correct value, if a number', function() {
      expect(dnNode.getData()).to.be.equal(0)
    })
    it('returns the correct type, if an array', function() {
      expect(Array.isArray(daNode.getData())).to.be.true
    })
    it('returns the correct value, if an array', function() {
      expect(daNode.getData()).to.be.deep.equal([1, 2])
    })
    it('returns the correct type, if an object', function() {
      expect(doNode.getData()).to.be.an('object')
    })
    it('returns the correct value, if an object', function() {
      expect(doNode.getData()).to.be.deep.equal({'a': 1, 'b': 2})
    })
    it('returns an object with a retrievable property, if an object', function() {
      expect(doNode.getData().a).to.be.equal(1)
    })
    it('returns the correct value, if next is specified', function() {
      expect(ngNode.getData()).to.be.equal(1)
    })
    it('returns the correct value, if next is a bad Node', function() {
      expect(ngbNode.getData()).to.be.equal(3)
    })
    it('returns undefined, if unspecified', function() {
      expect(emptyNode.getData()).to.be.undefined
    })
    it('returns undefined, if next is not a Node', function() {
      expect(nbNode.getData()).to.be.undefined
    })
  })

  context('getNext()', function() {
    const nnNode = new Node({data: 'string'})
    const ngNode = new Node({data: 0, next: nnNode})
    const nbNode = new Node({data: 1, next: 0})
    const dxnbNode = new Node({next: ngNode})
    const ngbNode = new Node({data: 0, next: dxnbNode})
    const emptyNode = new Node()
    it('returns the correct type, if specified', function() {
      expect(ngNode.getNext() instanceof Node).to.be.true
    })
    it('returns the correct value, if specified', function() {
      expect(ngNode.getNext()).to.be.deep.equal(nnNode)
    })
    it(
      'returns a Node with a retrievable property, if specified',
      function() {
        expect(ngNode.getNext().getData()).to.be.equal('string')
      }
    )
    it('returns null, if unspecified', function() {
      expect(nnNode.getNext()).to.be.null
    })
    it('returns null, if specified but not a Node', function() {
      expect(nbNode.getNext()).to.be.null
    })
    it('returns null, if specified but data is unspecified', function() {
      expect(dxnbNode.getNext()).to.be.null
    })
    it('returns null, if data unspecified', function() {
      expect(emptyNode.getNext()).to.be.null
    })
  })

  context('setNext()', function() {
    const nnNode = new Node({data: 0})
    const ngNode = new Node({data: 'astring', next: nnNode})
    const nbNode = new Node({data: 1, next: "nonode"})
    it('returns a Node', function() {
      expect(nnNode.setNext(ngNode) instanceof Node).to.be.true
    })
    it('returns the correct Node', function() {
      expect(nnNode.setNext(ngNode)).to.be.deep.equal(nnNode)
    })
    it(
      'returns a Node with a retrievable data property',
      function() {
        expect(ngNode.setNext(nnNode).getData()).to.be.equal('astring')
      }
    )
    it(
      'returns a Node with a retrievable good new next property',
      function() {
        expect(nnNode.setNext(ngNode).getNext()).to.be.deep.equal(ngNode)
      }
    )
    it(
      'returns a Node with a retrievable bad new next property',
      function() {
        expect(nnNode.setNext(nbNode).getNext()).to.be.deep.equal(nbNode)
      }
    )
    it(
      'fails to change next (from last value), if newNext is invalid',
      function() {
        expect(nnNode.setNext("badNode").getNext()).to.be.deep.equal(nbNode)
      }
    )
  })

})
