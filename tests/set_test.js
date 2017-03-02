import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const mySet = new Set()
      mySet.add(7)

      expect(mySet.dataStore)
        .to.deep.eql([7])
    })
  })

  context('isEmpty()', () => {
    it('returns a boolean value of true indicating "is empty".', () => {
      const mySet = new Set()

      expect(mySet.isEmpty())
        .to.eql(true)
    })
  })

  context('contains()', () => {
    it('returns the "false" boolean value indicating your set contains no elements', () => {
      const mySet = new Set()

      expect(mySet.isEmpty())
        .to.eql(true)
    })
  })

})
