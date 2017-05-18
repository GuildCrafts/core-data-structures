import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityNode from '../src/priority_node'

chai.use(chaiChange)

describe('PriorityNode', function() {
  'use strict'

  it('is a function', function() {
    expect(PriorityNode).to.be.a('function')
  })

  context('getData()', function() {
    const levelZero = new PriorityNode({data: 'level0', priority: 0})
    const level0 = new PriorityNode({data: 0, priority: 0})
    const levelArrayNum = new PriorityNode({data: [1, 2], priority: 0})
    const levelArrayString = new PriorityNode({data: ['a', 'b'], priority: 0})
    const levelObj = new PriorityNode({data: {'a': 1, 'b': 2}, priority: 0})
    const priUnd = new PriorityNode({data: 'level0'})
    const levelUnd = new PriorityNode({priority: 0})
    const levZPriZ = new PriorityNode({data: 'level0', priority: 'zero'})
    const next00 = new PriorityNode({data: -1, priority: 0, next: level0})
    const next0Num = new PriorityNode({data: -1, priority: 0, next: 0})
    it('returns the correct type, if a string', function() {
      expect(levelZero.getData()).to.be.a('string')
    })
    it('returns the correct value, if a string', function() {
      expect(levelZero.getData()).to.be.equal('level0')
    })
    it('returns the correct type, if a number', function() {
      expect(level0.getData()).to.be.a('number')
    })
    it('returns the correct value, if a number', function() {
      expect(level0.getData()).to.be.equal(0)
    })
    it('returns the correct type, if an array', function() {
      expect(Array.isArray(levelArrayNum.getData())).to.be.true
    })
    it('returns the correct value, if an array', function() {
      expect(levelArrayString.getData()).to.be.deep.equal(['a', 'b'])
    })
    it('returns the correct type, if an object', function() {
      expect(levelObj.getData()).to.be.an('object')
    })
    it('returns the correct value, if an object', function() {
      expect(levelObj.getData()).to.be.deep.equal({'a': 1, 'b': 2})
    })
    it('returns an object with a retrievable property, if an object', function() {
      expect(levelObj.getData().a).to.be.equal(1)
    })
    it('returns the correct value, if priority is unspecified', function() {
      expect(priUnd.getData()).to.be.equal('level0')
    })
    it('returns the correct value, if priority is unspecified', function() {
      expect(priUnd.getData()).to.be.equal('level0')
    })
    it('returns the correct value, if next node is specified', function() {
      expect(next00.getData()).to.be.equal(-1)
    })
    it('returns undefined, if unspecified', function() {
      expect(levelUnd.getData()).to.be.undefined
    })
    it('returns undefined, if priority is not a number', function() {
      expect(levZPriZ.getData()).to.be.undefined
    })
    it('returns undefined, if next is not a PriorityNode', function() {
      expect(next0Num.getData()).to.be.undefined
    })
  })

  context('getPriority()', function() {
    const level0 = new PriorityNode({data: 0, priority: 0})
    const next00 = new PriorityNode({data: -1, priority: 0, next: level0})
    const priUnd = new PriorityNode({data: 'level0'})
    const levelUnd = new PriorityNode({priority: 0})
    const levZPriZ = new PriorityNode({data: 'level0', priority: 'zero'})
    const next0Num = new PriorityNode({data: -1, priority: 0, next: 0})
    it('returns the correct type', function() {
      expect(level0.getPriority()).to.be.a('number')
    })
    it('returns the correct value', function() {
      expect(level0.getPriority()).to.be.equal(0)
    })
    it('returns the correct value, if next node is specified', function() {
      expect(next00.getPriority()).to.be.equal(0)
    })
    it('returns the default value, if unspecified', function() {
      expect(priUnd.getPriority()).to.be.equal(0)
    })
    it('returns undefined, if data unspecified', function() {
      expect(levelUnd.getPriority()).to.be.undefined
    })
    it('returns undefined, if not a number', function() {
      expect(levZPriZ.getPriority()).to.be.undefined
    })
    it('returns undefined, if next is not a PriorityNode', function() {
      expect(next0Num.getPriority()).to.be.undefined
    })
  })

  context('getNext()', function() {
    const level0 = new PriorityNode({data: 0, priority: 0})
    const next00 = new PriorityNode({data: -1, priority: 0, next: level0})
    const next0Num = new PriorityNode({data: -1, priority: 0, next: 0})
    const levelUnd = new PriorityNode({priority: 0})
    const levZPriZ = new PriorityNode({data: 'level0', priority: 'zero'})
    it('returns the correct type, if specified', function() {
      expect(next00.getNext() instanceof PriorityNode).to.be.true
    })
    it('returns the correct value, if specified', function() {
      expect(next00.getNext()).to.be.deep.equal(level0)
    })
    it(
      'returns a PriorityNode with a retrievable property, if specified',
      function() {
        expect(next00.getNext().getData()).to.be.equal(0)
      }
    )
    it('returns null, if unspecified', function() {
      expect(level0.getNext()).to.be.null
    })
    it('returns null, if specified but not a PriorityNode', function() {
      expect(next0Num.getNext()).to.be.null
    })
    it('returns null, if data is unspecified', function() {
      expect(levelUnd.getNext()).to.be.null
    })
    it('returns null, if priority is not a number', function() {
      expect(levZPriZ.getNext()).to.be.null
    })
  })

  context('setPriority()', function() {
    const level0 = new PriorityNode({data: 0, priority: 0})
    it('returns a PriorityNode', function() {
      expect(level0.setPriority(2) instanceof PriorityNode).to.be.true
    })
    it('returns the correct PriorityNode', function() {
      expect(level0.setPriority(3)).to.be.deep.equal(level0)
    })
    it(
      'returns a PriorityNode with a retrievable data property',
      function() {
        expect(level0.setPriority(4).getData()).to.be.equal(0)
      }
    )
    it(
      'returns a PriorityNode with a retrievable new priority property',
      function() {
        expect(level0.setPriority(5).getPriority()).to.be.equal(5)
      }
    )
    it(
      'fails to change priority (from last value), if newPriority is invalid',
      function() {
        expect(level0.setPriority("6").getPriority()).to.be.equal(5)
      }
    )
  })

  context('setNext()', function() {
    const level0 = new PriorityNode({data: 0, priority: 0})
    const levelZero = new PriorityNode({data: 'level0', priority: 0})
    it('returns a PriorityNode', function() {
      expect(level0.setNext(levelZero) instanceof PriorityNode).to.be.true
    })
    it('returns the correct PriorityNode', function() {
      expect(level0.setNext(levelZero)).to.be.deep.equal(level0)
    })
    it(
      'returns a PriorityNode with a retrievable priority property',
      function() {
        expect(level0.setNext(levelZero).getPriority()).to.be.equal(0)
      }
    )
    it(
      'returns a PriorityNode with a retrievable new next property',
      function() {
        expect(level0.setNext(levelZero).getNext()).to.be.deep.equal(levelZero)
      }
    )
    it(
      'fails to change next (from last value), if newNext is invalid',
      function() {
        expect(level0.setNext("next00").getNext()).to.be.deep.equal(levelZero)
      }
    )
  })

})
