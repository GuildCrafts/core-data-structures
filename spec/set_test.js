import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  describe('add()', () => {
    it('adds an element to the set -- if it does not already exist', () => {
      const set = new Set(['A', 'B', 'C'])

      expect(() => set.add('D'))
        .to.alter(() => set.elements.length, { from: 3, to: 4 })
      expect( set.add('D'))
        .to.be.false
      expect(set.elements[set.elements.length - 1])
        .to.equal('D')

    })
  })

  describe('isEmpty()', () => {
    it('returns true if the set is empty or false if not.', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set()

      expect(set.isEmpty())
        .to.be.false
      expect(otherSet.isEmpty())
        .to.be.true
    })
  })

  describe('contains()', () => {
    it('returns true the set contains the element or false if not.', () => {
      const set = new Set(['A', 'B', 'C', 'D'])

      expect(set.contains('F'))
        .to.be.false
      expect(set.contains('D'))
        .to.be.true
    })
  })

  describe('remove()', () => {
    it('removes an element (if it exists) from the set.', () => {
      const set = new Set(['A', 'B', 'C', 'D'])

      expect(() => set.remove('D'))
        .to.alter(() => set.elements.length, { from: 4, to: 3 })
      expect(set.remove('G'))
        .to.equal("The value to remove does not exist")
    })
  })

  describe('forEach()', () => {
    it('takes a callback function and passes it each element in sequence.', () => {
      const set = new Set(['A', 'B', 'C', 'D'])
      const result = []
      const test = element => result.push( element )

      set.forEach( test )

      expect( result )
        .to.have.members(['A','B','C','D'])
    })
  })

  describe('size()', () => {
    it('returns the number of elements in the set', () => {
      const set = new Set(['A', 'B', 'C', 'D'])
      const emptySet = new Set([])


      expect(set.size())
        .to.equal(4)
      expect(emptySet.size())
        .to.equal(0)
    })
  })

  describe('union()', () => {
    it('unions the set with another set and returns the resulting set.', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set(['B', 'C', 'D'])

      expect(set.union(otherSet))
        .to.deep.equal(['A', 'B', 'C', 'D'])
    })
  })

  describe('intersect()', () => {
    it('intersects the set with another set and returns the resulting set.', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set(['B', 'C', 'D'])

      expect(set.intersect(otherSet))
        .to.deep.equal(['B', 'C'])
    })
  })

  describe('difference()', () => {
    it('returns a set that contains the elements found in the set but not in otherSet.', () => {
      const set = new Set(['A', 'A', 'B', 'C'])
      const otherSet = new Set(['B', 'C', 'D'])

      expect(set.difference(otherSet))
        .to.deep.equal(['A', 'D'])
    })
  })

  describe('isSubset()', () => {
    it('returns true if the set is a subset of otherSet or false if not.', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set(['B', 'C'])

      expect(set.isSubset(otherSet))
        .to.be.true
    })
    it('returns false', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set(['B', 'C', 'D'])

      expect(set.isSubset(otherSet))
        .to.be.false
    })

    it('returns true', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set(['A', 'C'])

      expect(set.isSubset(otherSet))
        .to.be.true
    })

    it('returns false', () => {
      const set = new Set(['A', 'B', 'C'])
      const otherSet = new Set(['A', 'C','F'])

      expect(set.isSubset(otherSet))
        .to.be.false
    })
  })

  describe('clone()', () => {
    it('returns a cloned set.', () => {
      const set = new Set(['A', 'B', 'C'])

      expect(set.clone())
        .to.deep.equal(['A', 'B', 'C'])
    })
  })

})
