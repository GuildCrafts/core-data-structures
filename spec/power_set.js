import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PowerSet from '../src/power_set'

chai.use(chaiChange)

describe('PowerSet', function() {
  'use strict'

  it('is a function', function() {
    expect(PowerSet).to.be.a('function')
  })

  context('empty powerSet interrogation', function() {
    const emptyPowerSet = new PowerSet([])
    it('isEmpty() returns true', function() {
      expect(emptyPowerSet.isEmpty()).to.be.true
    })
    it('contains("x") returns false', function() {
      expect(emptyPowerSet.contains('x')).to.be.false
    })
    it('size() returns 0', function() {
      expect(emptyPowerSet.size()).to.equal(0)
    })
  })

  context('non-empty powerSet interrogation', function() {
    const powerSet = new PowerSet([1, 2, 4, 8, 16])
    it('isEmpty() returns false', function() {
      expect(powerSet.isEmpty()).to.be.false
    })
    it('contains(4) returns true', function() {
      expect(powerSet.contains(4)).to.be.true
    })
    it('contains(5) returns false', function() {
      expect(powerSet.contains(5)).to.be.false
    })
    it('size() returns 5', function() {
      expect(powerSet.size()).to.equal(5)
    })
  })

  context('dual-set interrogation', function() {
    const ps0 = new PowerSet([3, 6, 9, 12, 15])
    const ps1 = new PowerSet([3, 6, 12, 24])
    it(('ps0.union(ps1) returns a powerSet of 6 elements'), function() {
      expect(ps0.union(ps1).size()).to.equal(6)
    })
    it(('ps0.union(ps1) returns a powerSet containing 15'), function() {
      expect(ps0.union(ps1).contains(15)).to.be.true
    })
    it(('ps0.union(ps0) returns a powerSet containing 15'), function() {
      expect(ps1.union(ps0).contains(15)).to.be.true
    })
    it(('ps0.intersect(ps1) returns a powerSet of 3 elements'), function() {
      expect(ps0.intersect(ps1).size()).to.equal(3)
    })
    it(('ps0.intersect(ps1) returns a powerSet containing 6'), function() {
      expect(ps0.intersect(ps1).contains(6)).to.be.true
    })
    it(('ps0.intersect(ps1) returns a powerSet not containing 9'), function() {
      expect(ps0.intersect(ps1).contains(9)).to.be.false
    })
    it(('ps1.intersect(ps0) returns a powerSet of 3 elements'), function() {
      expect(ps1.intersect(ps0).size()).to.equal(3)
    })
    it(('ps1.intersect(ps0) returns a powerSet containing 6'), function() {
      expect(ps1.intersect(ps0).contains(6)).to.be.true
    })
    it(('ps1.intersect(ps0) returns a powerSet not containing 9'), function() {
      expect(ps1.intersect(ps0).contains(9)).to.be.false
    })
    it(('ps0.difference(ps1) returns a powerSet of 2 elements'), function() {
      expect(ps0.difference(ps1).size()).to.equal(2)
    })
    it(('ps0.difference(ps1) returns a powerSet containing 9'), function() {
      expect(ps0.difference(ps1).contains(9)).to.be.true
    })
    it(('ps0.difference(ps1) returns a powerSet not containing 6'), function() {
      expect(ps0.difference(ps1).contains(6)).to.be.false
    })
    it(('ps1.difference(ps0) returns a powerSet of 1 element'), function() {
      expect(ps1.difference(ps0).size()).to.equal(1)
    })
    it(('ps1.difference(ps0) returns a powerSet containing 24'), function() {
      expect(ps1.difference(ps0).contains(24)).to.be.true
    })
    it(('ps1.difference(ps0) returns a powerSet not containing 6'), function() {
      expect(ps1.difference(ps0).contains(6)).to.be.false
    })
  })

  context('set manipulation', function() {
    const powerSet = new PowerSet([1, 2, 4, 8, 16])
    it('add() increases the powerSet size', function() {
      const oldSize = powerSet.size()
      powerSet.add(32)
      expect(powerSet.size()).to.equal(oldSize + 1)
    })
    it('adding an existing element makes no change', function() {
      const oldSize = powerSet.size()
      powerSet.add(4)
      expect(powerSet.size()).to.equal(oldSize)
    })
    it('add() makes the powerSet contain the added element', function() {
      expect(powerSet.contains(64)).to.be.false
      powerSet.add(64)
      expect(powerSet.contains(64)).to.be.true
    })
    it('remove() decreases the powerSet size', function() {
      const oldSize = powerSet.size()
      powerSet.remove(64)
      expect(powerSet.size()).to.equal(oldSize - 1)
    })
    it('removing a nonexistent element makes no change', function() {
      const oldSize = powerSet.size()
      powerSet.remove(33)
      expect(powerSet.size()).to.equal(oldSize)
    })
    it('remove() makes the powerSet omit the removed element', function() {
      expect(powerSet.contains(32)).to.be.true
      powerSet.remove(32)
      expect(powerSet.contains(32)).to.be.false
    })
    it('clone() returns a distinct identical powerSet', function() {
      const newPowerSet = powerSet.clone()
      expect(newPowerSet).to.not.equal(powerSet)
      expect(newPowerSet).to.deep.equal(powerSet)
    })
  })

  context('element iteration', function() {
    const powerSet = new PowerSet([1, 2, 4, 8, 16])
    const newPowerSet = new PowerSet([])
    it('forEach() can add 1 to each element', function() {
      const plusOne = function(value, key, thisArg) {
        newPowerSet.add(value + 1);
      }
      powerSet.forEach(element => plusOne(element))
      expect(newPowerSet.contains(8)).to.be.false
      expect(newPowerSet.contains(9)).to.be.true
    })
  })
})
