import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoubleNode from '../src/double_node'

chai.use(chaiChange)

describe('DoubleNode', function() {
  'use strict'

  it('is a function', function() {
    expect(DoubleNode).to.be.a('function')
  })

  context('getData()', function() {
    const dsNode = new DoubleNode({data: 'string'})
    const dnNode = new DoubleNode({data: 0})
    const daNode = new DoubleNode({data: [1, 2]})
    const doNode = new DoubleNode({data: {'a': 1, 'b': 2}})
    const emptyNode = new DoubleNode()
    const ngNode = new DoubleNode({data: 1, next: dsNode})
    const nbNode = new DoubleNode({data: 2, next: "dnNode"})
    const pgNode = new DoubleNode({data: 3, previous: dnNode})
    const pgbNode = new DoubleNode({data: 4, previous: emptyNode})
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
    it('returns the correct value, if previous is specified', function() {
      expect(pgNode.getData()).to.be.equal(3)
    })
    it('returns the correct value, if previous is a bad DoubleNode', function() {
      expect(pgbNode.getData()).to.be.equal(4)
    })
    it('returns undefined, if unspecified', function() {
      expect(emptyNode.getData()).to.be.undefined
    })
    it('returns undefined, if next is not a DoubleNode', function() {
      expect(nbNode.getData()).to.be.undefined
    })
  })

  context('getNext()', function() {
    const nnNode = new DoubleNode({data: 'string'})
    const ngNode = new DoubleNode({data: 0, next: nnNode})
    const nbNode = new DoubleNode({data: 1, next: 0})
    const dxnbNode = new DoubleNode({next: ngNode})
    const ngbNode = new DoubleNode({data: 0, next: dxnbNode})
    const pgNode = new DoubleNode({data: 2, next: nnNode, previous: nnNode})
    const pgbNode = new DoubleNode({data: 3, next: ngNode, previous: nbNode})
    const pbNode = new DoubleNode({data: 4, next: ngNode, previous: "node"})
    it('returns the correct type, if specified', function() {
      expect(ngNode.getNext() instanceof DoubleNode).to.be.true
    })
    it('returns the correct value, if specified', function() {
      expect(ngNode.getNext()).to.be.deep.equal(nnNode)
    })
    it(
      'returns a DoubleNode with a retrievable property, if specified',
      function() {
        expect(ngNode.getNext().getData()).to.be.equal('string')
      }
    )
    it('returns null, if unspecified', function() {
      expect(nnNode.getNext()).to.be.null
    })
    it('returns null, if specified but not a DoubleNode', function() {
      expect(nbNode.getNext()).to.be.null
    })
    it('returns null, if specified but data is unspecified', function() {
      expect(dxnbNode.getNext()).to.be.null
    })
  })

  context('setNext()', function() {
    const nnNode = new DoubleNode({data: 0})
    const ngNode = new DoubleNode({data: 'string', next: nnNode})
    const nbNode = new DoubleNode({data: 1, next: "nonode"})
    const pbNode = new DoubleNode({data: 2, next: ngNode, previous: "bad"})
    it('returns a DoubleNode', function() {
      expect(nnNode.setNext(ngNode) instanceof DoubleNode).to.be.true
    })
    it('returns the correct DoubleNode', function() {
      expect(nnNode.setNext(ngNode)).to.be.deep.equal(nnNode)
    })
    it(
      'returns a DoubleNode with a retrievable data property',
      function() {
        expect(ngNode.setNext(nnNode).getData()).to.be.equal('string')
      }
    )
    it(
      'returns a DoubleNode with a retrievable good new next property',
      function() {
        expect(nnNode.setNext(ngNode).getNext()).to.be.deep.equal(ngNode)
      }
    )
    it(
      'returns a DoubleNode with a retrievable bad new next property',
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

  context('getPrevious()', function() {
    const nnNode = new DoubleNode({data: 'astring'})
    const ngNode = new DoubleNode({data: 0, next: nnNode})
    const nbNode = new DoubleNode({data: 1, next: 0})
    const dxpbNode = new DoubleNode({previous: ngNode})
    const pgNode = new DoubleNode({data: 2, next: nnNode, previous: nnNode})
    const pgbNode = new DoubleNode({data: 3, next: ngNode, previous: nbNode})
    const pbNode = new DoubleNode({data: 4, next: ngNode, previous: "node"})
    it('returns the correct type, if specified', function() {
      expect(pgNode.getPrevious() instanceof DoubleNode).to.be.true
    })
    it('returns a DoubleNode, if an invalid one is specified', function() {
      expect(pgbNode.getPrevious() instanceof DoubleNode).to.be.true
    })
    it('returns the correct value, if specified', function() {
      expect(pgNode.getPrevious()).to.be.deep.equal(nnNode)
    })
    it(
      'returns a DoubleNode with a retrievable property, if specified',
      function() {
        expect(pgNode.getPrevious().getData()).to.be.equal('astring')
      }
    )
    it('returns null, if unspecified', function() {
      expect(nnNode.getPrevious()).to.be.null
    })
    it('returns null, if specified but not a DoubleNode', function() {
      expect(pbNode.getPrevious()).to.be.null
    })
    it('returns null, if specified but data is unspecified', function() {
      expect(dxpbNode.getPrevious()).to.be.null
    })
  })

  context('setPrevious()', function() {
    const nnNode = new DoubleNode({data: 0})
    const ngNode = new DoubleNode({data: 'astring', next: nnNode})
    const nbNode = new DoubleNode({data: 1, next: "nonode"})
    const pbNode = new DoubleNode({data: 2, next: ngNode, previous: "bad"})
    it('returns a DoubleNode', function() {
      expect(nnNode.setPrevious(ngNode) instanceof DoubleNode).to.be.true
    })
    it('returns the correct DoubleNode', function() {
      expect(nnNode.setPrevious(ngNode)).to.be.deep.equal(nnNode)
    })
    it(
      'returns a DoubleNode with a retrievable data property',
      function() {
        expect(ngNode.setPrevious(nnNode).getData()).to.be.equal('astring')
      }
    )
    it(
      'returns a DoubleNode with a retrievable good new previous property',
      function() {
        expect(nnNode.setPrevious(nnNode).getPrevious())
        .to.be.deep.equal(nnNode)
      }
    )
    it(
      'returns a DoubleNode with a retrievable bad new next property',
      function() {
        expect(nnNode.setPrevious(nbNode).getPrevious())
        .to.be.deep.equal(nbNode)
      }
    )
    it(
      'fails to change previous (from last value), if newPrevious is invalid',
      function() {
        expect(nnNode.setPrevious("badNode").getPrevious())
        .to.be.deep.equal(nbNode)
      }
    )
  })

})
