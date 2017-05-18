import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', function() {
  'use strict'

  it('is a function', function() {
    expect(Set).to.be.a('function')
  })

  context('empty set interrogation', function() {
    const emptySet = new Set([])
    it('isEmpty() returns true', function() {
      expect(emptySet.isEmpty()).to.be.true
    })
    it('contains("x") returns false', function() {
      expect(emptySet.contains('x')).to.be.false
    })
    it('size() returns 0', function() {
      expect(emptySet.size()).to.be.equal(0)
    })
  })

  context('non-empty set interrogation', function() {
    const set = new Set([1, 2, 4, 8, 16])
    it('isEmpty() returns false', function() {
      expect(set.isEmpty()).to.be.false
    })
    it('contains(4) returns true', function() {
      expect(set.contains(4)).to.be.true
    })
    it('contains(5) returns false', function() {
      expect(set.contains(5)).to.be.false
    })
    it('size() returns 5', function() {
      expect(set.size()).to.be.equal(5)
    })
  })

  context('dual-set interrogation', function() {
    const set0 = new Set([3, 6, 9, 12, 15])
    const set1 = new Set([3, 6, 12, 24])
    it(('set0.union(set1) returns a set of 6 elements'), function() {
      expect(set0.union(set1).size()).to.be.equal(6)
    })
    it(('set0.union(set1) returns a set containing 15'), function() {
      expect(set0.union(set1).contains(15)).to.be.true
    })
    it(('set0.intersect(set1) returns a set of 3 elements'), function() {
      expect(set0.intersect(set1).size()).to.be.equal(3)
    })
    it(('set0.intersect(set1) returns a set containing 6'), function() {
      expect(set0.intersect(set1).contains(6)).to.be.true
    })
    it(('set0.intersect(set1) returns a set not containing 9'), function() {
      expect(set0.intersect(set1).contains(9)).to.be.false
    })
    it(('set0.difference(set1) returns a set of 2 elements'), function() {
      expect(set0.intersect(set1).size()).to.be.equal(2)
    })
    it(('set0.difference(set1) returns a set containing 9'), function() {
      expect(set0.intersect(set1).contains(9)).to.be.true
    })
    it(('set0.difference(set1) returns a set not containing 6'), function() {
      expect(set0.intersect(set1).contains(6)).to.be.false
    })
    it(('set1.difference(set0) returns a set of 1 element'), function() {
      expect(set0.intersect(set1).size()).to.be.equal(2)
    })
    it(('set1.difference(set0) returns a set containing 24'), function() {
      expect(set0.intersect(set1).contains(24)).to.be.true
    })
    it(('set1.difference(set0) returns a set not containing 6'), function() {
      expect(set0.intersect(set1).contains(6)).to.be.false
    })
  })

})
