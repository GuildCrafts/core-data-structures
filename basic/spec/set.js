import chai, { expect } from 'chai'
import Set from '../src/set'


describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('Adds an element to the set', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      mySet.add('Beelzebub')
      mySet.add([1,2,3])
      expect(mySet.length).to.deep.eql(3)
      expect(mySet.elements).to.deep.eql(['Azazel', 'Beelzebub', [1,2,3]])
    })
    it('Increases the stack by 1', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      expect(mySet.length).to.eql(1)
    })
  })

  context('isEmpty()', () => {
    it('Returns true if the set is empty', () => {
      const mySet = new Set()
      expect(mySet.isEmpty()).to.eql(true)
    })
    it('Returns false if the stack is not empty', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      expect(mySet.isEmpty()).to.eql(false)
    })
  })

  context('size()', () => {
    it('Returns 0 if the set is empty', () => {
      const mySet = new Set()
      expect(mySet.size()).to.deep.eql(0)
    })
    it('Returns the size of a set', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      expect(mySet.size()).to.deep.eql(1)
    })
  })

  context('contains()', () => {
    it('Returns true if the set includes the searchTerm', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      expect(mySet.contains('Azazel')).to.deep.eql(true)
    })
    it('Returns flase if the set does not include the searchTerm', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      expect(mySet.contains('Dantalion')).to.deep.eql(false)
    })
  })

  context('remove()', () => {
    it('removes the specified searchTerm from the set', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      mySet.add('Beelzebub')
      mySet.remove('Azazel')
      expect(mySet.elements).to.deep.eql(['Beelzebub'])
    })
    it('returns null if set is empty', () => {
      const mySet = new Set()
      expect(mySet.remove('Beelzebub')).to.deep.eql(null)
    })
    it('Reduces the length of the set by 1 with each remove()', () => {
      const mySet = new Set()
      mySet.add('Azazel')
      mySet.add('Beelzebub')
      expect(mySet.size()).to.deep.eql(2)
      mySet.remove('Beelzebub')
      expect(mySet.size()).to.deep.eql(1)
      mySet.remove('Azazel')
      expect(mySet.size()).to.deep.eql(0)
    })
  })

  context('forEach()', () => {
    it('applys a callback function to each item of a set', () => {
      const mySet = new Set()
      const addOne = function(x){return x + 1}
      mySet.add(1)
      mySet.add(2)
      mySet.add(3)
      mySet.forEach(mySet.elements, addOne)
      expect(mySet.elements).to.deep.equal([2,3,4])
    })
  })

  context('setUnion()', () => {
    it('returns the union of two sets', () => {
      const mySet = new Set()
      const myOtherSet = new Set()
      mySet.add(1)
      mySet.add(2)
      mySet.add(3)
      myOtherSet.add(4)
      myOtherSet.add(5)
      myOtherSet.add(6)
      expect(mySet.setUnion(myOtherSet.elements)).to.deep.equal([1,2,3,4,5,6])
    })
  })

  context('intersection()', () => {
    it('returns the intersection of two sets', () => {
      const mySet = new Set()
      const myOtherSet = new Set()
      mySet.add(1)
      mySet.add(2)
      mySet.add(3)
      myOtherSet.add(2)
      myOtherSet.add(3)
      myOtherSet.add(4)
      expect(mySet.intersection(myOtherSet.elements)).to.deep.equal([2,3])
    })
  })

  context('difference()', () => {
    it('returns the intersection of two sets', () => {
      const mySet = new Set()
      const myOtherSet = new Set()
      mySet.add(1)
      mySet.add(2)
      mySet.add(3)
      myOtherSet.add(2)
      myOtherSet.add(3)
      myOtherSet.add(4)
      expect(mySet.difference(myOtherSet.elements)).to.deep.equal([1])
    })
  })

  context('isSubset()', () => {
    it('returns true if input is a subset of the set', () => {
      const mySet = new Set()
      const myOtherSet = new Set()
      mySet.add(4)
      mySet.add(5)
      mySet.add(6)
      myOtherSet.add(4)
      myOtherSet.add(5)
      expect(mySet.isSubset(myOtherSet)).to.deep.equal(true)
    })
    it('returns false if input is not a subset of the set', () => {
      const mySet = new Set()
      const myOtherSet = new Set()
      mySet.length = 6
      mySet.elements = [[1,2,3],[4,5,6]]
      myOtherSet.length = 3
      myOtherSet.elements = [7,36,"Demogorgon"]
      expect(mySet.isSubset(myOtherSet)).to.deep.equal(false)
    })
  })


  context('clone()', () => {
    it('returns a clone of a set', () => {
      const mySet = new Set()
      mySet.add(1)
      mySet.add(2)
      mySet.add(3)
      expect(mySet.clone().elements).to.deep.equal([1,2,3])
    })
  })



})
