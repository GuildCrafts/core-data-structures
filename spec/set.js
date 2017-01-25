import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe.only('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('A')).to.equal(true)
    })
  })


  context('contains()', () => {
    it('Adds A, and returns true is contains A', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('A')).to.equal(true)
    })
    it('Adds A, returns true is contains B, false if not. Expects false', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.contains('B')).to.equal(false)
    })
  })

  context('isEmpty()', () => {
    it('returns false if the set is not empty.', () => {
      const mySet = new Set()
      mySet.add('A')
      expect(mySet.isEmpty()).to.equal(false)
    })
    it('returns true if the set is empty.', () => {
      const mySet = new Set()
      expect(mySet.isEmpty()).to.equal(true)
    })
  })

  context('remove()', () => {
    it('Adds, then removes A, returns true if the set is empty', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.remove('A')
      expect(mySet.isEmpty()).to.equal(true)
    })
    it('Adds, then removes A, returns true if contains A returns false', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.remove('A')
      expect(mySet.contains('A')).to.equal(false)
    })
    it('Adds A,B,C, then removes A, returns true if size is 2', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.remove('A')
      expect(mySet.size()).to.equal(2)
    })
  })

  context('size()', () => {
    it('Adds A,B,C and returns true if size is 3', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      expect(mySet.size()).to.equal(3)
    })
    it('Add nothing, returns true if size is 0.', () => {
      const mySet = new Set()
      expect(mySet.size()).to.equal(0)
    })
  })

  context('union()', () => {
    it('Adds A,B,C, then union [D,E,F] and returns true if size is 6', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.union(['D','E','F'])
      expect(mySet.size()).to.equal(6)
    })
    it('Adds A,B,C, then union [D,E,F] and returns true if contains E', () => {
      const mySet = new Set()
      mySet.add('A')
      mySet.add('B')
      mySet.add('C')
      mySet.union(['D','E','F'])
      expect(mySet.contains('E')).to.equal(true)
    })
  })

})
