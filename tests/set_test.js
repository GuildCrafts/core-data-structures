import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('boogabooga', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const mySet = new Set()
      mySet.add(7)

      expect(mySet.dataStore)
        .to.deep.eql([7])

      expect(() => mySet.add(3)).to.alter(() => mySet.size, { from: 1, to: 2 })
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

  context('remove()', () => {
    it('removes element from set', () => {
      const mySet = new Set()
      mySet.add(3)
      mySet.add(2)
      mySet.add(1)

      expect(() => mySet.remove(1)).to.alter(() => mySet.size, { from: 3, to: 2 })
    })
  })

  context('show()', () => {
    it('returns the object at the index number given', () => {
      const mySet = new Set()
      mySet.add('yolo')

      expect(mySet.show(0))
        .to.eql('yolo')
    })
  })

  context('length()', () => {
    it('returns the size of the set', () => {
      const mySet = new Set()
      mySet.add(3)
      mySet.add(2)

      expect(mySet.length()).to.eql(2)
    })
  })

  context('showAll()', () => {
    it('returns all the data values in your set', () => {
      const mySet = new Set()
      mySet.add(3)
      mySet.add(2)
      mySet.add(1)

      expect(mySet.showAll()).to.eql([3,2,1])
    })
  })

  context('forEach()', () => {
    it('returns the result of the function passed in on each set value', () => {
      const mySet = new Set()
      mySet.add(3)
      mySet.add(2)
      mySet.add(1)

      expect( mySet.forEach(function(a){return a+3}) ).to.eql([6,5,4])
    })

  })

  context('union()', () => {
    it('returns a union of the sets passed', () => {
      const mySet = new Set()
      mySet.add(3)
      mySet.add(4)

      const my2ndSet = new Set()
      my2ndSet.add(5)
      my2ndSet.add(6)

      expect(mySet.union(my2ndSet)).to.eql([[3,4],[5,6]])
    })
  })

  context('intersect()', () => {
    it('returns the intersecting values of both sets', () => {
      const mySet = new Set()
      mySet.add(3)
      mySet.add(5)

      const my2ndSet = new Set()
      my2ndSet.add(1)
      my2ndSet.add(3)

      expect(mySet.intersect(my2ndSet)).to.eql([3])
    })
  })


})
