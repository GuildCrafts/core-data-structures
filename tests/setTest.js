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
    it('adds element to set', () => {
      const mySet = new Set(['a', 'b', 3, 'zeze'])
      console.log(mySet)

      expect(() => mySet.add('foo'))
        .to.alter(() => mySet.size(), { from: 4, to: 5 })
    })
  })

  context('isEmpty()', () => {
    it('checks if set is empty', () => {
      const mySet = new Set([])
      let EmptySet = mySet.isEmpty()
      expect(EmptySet).to.deep.eql(true)
      mySet.add('lemons')
      let notemptySet = mySet.isEmpty()
      expect(notemptySet).to.deep.equal(false)

    })
  })

  context('contains()', () => {
    it('returns true if set contains element we are passing', () => {
      const mySet = new Set([1, 2, 3, 4])
      let setContains = mySet.contains(3)
      expect(setContains).to.deep.eql(true)
      let doesntContain = mySet.contains(5)
      expect(doesntContain).to.deep.equal(false)

    })
  })

  context('remove()', () => {
    it('removes an element from the set', () => {
      const mySet = new Set([1, 2, 3, 4])
      expect(mySet.set).to.deep.eql([1, 2, 3, 4])
      mySet.remove(3)
      expect(mySet.set).to.deep.eql([1, 2, 4])
    })
  })
  context('forEach()', () => {
    it('takes a callback function and passes it each element of set', () => {
      const mySet = new Set([1, 2, 3, 4])
      const sumSet = mySet.forEach(elem => console.log(elem +1))
    })
  })
  // how to test iterating thru set?
})
