import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)
  let set

describe('Set', function() {
  beforeEach(function() {
    set = new Set()
  })

  it('exists', function() {
    expect(Set).to.be.a('function')
  })

  context('add', function() {
    it('adds an element to the set', function() {
      set.add(1)

      expect(set.set).to.include(1)
    })

    it('does not add an element if it is already part of the set', function() {
      set.add(1)
      set.add(2)
      set.add(1)

      expect(set.set).to.eql([1, 2])
    })
  })

  context('isEmpty', function() {
    it('returns true if the set is empty', function() {

      expect(set.isEmpty()).to.eql(true)
    })

    it('returns false if the set is empty', function() {
      set.add(1)

      expect(set.isEmpty()).to.eql(false)
    })
  })

  context('contains', function() {
    it('returns true if the set contains the element', function() {
      set.add(1)

      expect(set.contains(1)).to.eql(true)
    })

    it('returns false if the set does not contain the element', function() {
      set.add(2)

      expect(set.contains(1)).to.eql(false)
    })
  })

  context('remove', function() {
    it('removes an element from the set', function() {
      set.add(1)
      set.add(2)
      set.add(3)

      expect(set.set).to.include(2)
      set.remove(2)

      expect(set.set).to.not.include(2)
    })
  })

  context('forEach', function() {
    it('passes the callback function each element in sequence', function() {
      set.add(1)
      set.add(2)
      set.add(3)
      set.forEach(element => element *= 2)

      expect(set.set).to.eql([2, 4, 6])
    })
  })

  context('size', function() {
    it('returns the number of elements in the set', function() {
      expect(set.size()).to.eql(0)
      set.add(1)
      set.add(2)
      set.add(3)
      set.add(4)

      expect(set.size()).to.eql(4)
    })
  })

  context('union', function() {
    it('unites a set with another set and returns the resulting set', function() {
      const set2 = new Set()
      set.add(1)
      set.add(2)
      set.add(3)
      set2.add(3)
      set2.add(5)

      expect(set.union(set2)).to.eql([1, 2, 3, 5])
    })
  })

  context('intersect', function() {
    it('intersects the set with another set and returns the resulting set', function() {
      const set2 = new Set()
      set.add(1)
      set.add(2)
      set.add(3)
      set2.add(3)
      set2.add(5)

      expect(set.intersect(set2)).to.eql([3])
    })
  })

  context('difference', function() {
    it('differentiates the set with another set and returns the resulting set', function() {
      const set2 = new Set()
      set.add(1)
      set.add(2)
      set.add(3)
      set2.add(3)
      set2.add(5)

      expect(set.difference(set2)).to.eql([1, 2])
    })
  })

  context('isSubset', function() {
    it('returns false if a set is not the subset of another set', function() {
      const set2 = new Set()
      set.add(1)
      set.add(2)
      set.add(3)
      set2.add(3)
      set2.add(5)

      expect(set.isSubset(set2)).to.eql(false)
    })

    it('returns true if a set is the subset of another set', function() {
      const set2 = new Set()
      set.add(1)
      set.add(2)
      set2.add(1)
      set2.add(2)
      set2.add(3)

      expect(set.isSubset(set2)).to.eql(true)
    })
  })

  context('clone', function() {
    it('returns a cloned set', function() {
      set.add(1)
      set.add(2)
      set.add(3)

      expect(set.clone()).to.eql(set.set)
      expect(set.clone()).to.not.equal(set.set)
    })
  })

})
