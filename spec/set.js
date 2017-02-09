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
    context('when the element is not already in the set', () => {
      it('adds element to set', () => {
        const mySet = new Set()

        expect(() => mySet.add('foo'))
          .to.alter(() => mySet.size(), {from: 0, to: 1 })
        expect(mySet.contains('foo')).to.equal(true)
      })
    })
    context('when the element is already in the set', () => {
      it('throws error', () => {
        const mySet = new Set()

        mySet.add('foo')
        expect(() => mySet.add('foo')).to.throw(Error)
      })
    })

  })

  context('isEmpty()', () => {
    context('when set is not empty', () => {
      it('returns false', () => {
        const mySet = new Set()

        mySet.add('anything')
        expect(mySet.isEmpty()).to.equal(false)
      })
    })
    context('when set is empty', () => {
      it('returns true', () => {
        const mySet = new Set()

        expect(mySet.isEmpty()).to.equal(true)
      })
    })
  })

  context('contains()', () => {
    context('when the element already exists in the set', () => {
      it('returns true', () => {
        const mySet = new Set()

        mySet.add('anything')
        expect(mySet.contains('anything')).to.equal(true)
      })
    })
    context('when element does not exist in the set', () => {
      it('returns false', () => {
        const mySet = new Set()

        mySet.add('anything')
        expect(mySet.contains('any')).to.equal(false)
      })
    })
  })

  context('remove()', () => {
    context('when the element exists in the set', () => {
      it('removes the element', () => {
        const mySet = new Set()

        mySet.add('anything')
        expect(() => mySet.remove('anything'))
          .to.alter(() => mySet.size(), {from: 1, to: 0 })
        expect(mySet.contains('anything')).to.not.equal(true)
      })
    })
  })

  context('forEach()', () => {
    it('takes a callback function and passes it each element in sequence.', () => {
      const mySet = new Set()

      const addMomElement = element => {
        mySet.add(element + 'mom')
      }

      mySet.add('anything')
      mySet.add('something')
      expect(() => mySet.forEach(addMomElement))
        .to.alter(() => mySet.size(), {from: 2, to: 4 })
      expect(mySet.contains('anythingmom')).to.equal(true)
      expect(mySet.contains('somethingmom')).to.equal(true)
    })
  })

  context('size()', () => {
    it('returns number of elements in a set', () => {
      const mySet = new Set()

      mySet.add('anything')
      mySet.add('any')
      expect(mySet.size()).to.equal(2)
    })
  })

  context('union()', () => {
    it('unions the set with another set and returns the resulting set', () => {
      const mySet = new Set()
      const secondSet = new Set()

      mySet.add('anything')
      secondSet.add('anything')
      secondSet.add('something')
      expect(mySet.union(secondSet).size()).to.equal(2)
      expect(mySet.union(secondSet).contains('anything', 'something')).to.equal(true)
    })
  })

  context('intersect()', () => {
    it('intersects the set with another set and returns the resulting set', () => {
      const mySet = new Set()
      const secondSet = new Set()

      mySet.add('anything')
      secondSet.add('anything')
      secondSet.add('something')
      expect(mySet.intersect(secondSet).size()).to.equal(1)
      expect(mySet.intersect(secondSet).contains('anything')).to.equal(true)
    })
  })

  context('difference()', () => {
    it('returns a set that contains the elements found in the set but not in otherSet.', () => {
      const mySet = new Set()
      const secondSet = new Set()

      mySet.add('anything')
      mySet.add('nothing')
      mySet.add('something')
      secondSet.add('anything')
      secondSet.add('something')
      expect(mySet.difference(secondSet).size()).to.equal(1)
      expect(mySet.difference(secondSet).contains('nothing')).to.equal(true)
  })
})

context('isSubset()', () => {
  context('when the set is a subset of otherSet', () => {
    it('returns true', () => {
      const mySet = new Set()
      const secondSet = new Set()

      mySet.add('blue')
      mySet.add('red')
      secondSet.add('blue')
      secondSet.add('red')
      secondSet.add('yellow')
      expect(mySet.isSubset(secondSet))
        .to.equal(true)
    })
  })

  context('when the set is not a subset of otherSet', () => {
    it('returns false', () => {
      const mySet = new Set()
      const secondSet = new Set()

      mySet.add('blue')
      mySet.add('red')
      secondSet.add('red')
      secondSet.add('yellow')
      expect(mySet.isSubset(secondSet))
        .to.equal(false)
    })
  })
})

context('clone()', () => {
  it('returns a cloned set.', () => {
    const mySet = new Set()
    const clonedSet = mySet.clone()

    mySet.add('anything')
    expect(clonedSet.size()).to.equal(1)
    expect(clonedSet.contains('anything')).to.equal(true)
    })
  })
})
