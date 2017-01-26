import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  context( 'add()', () => {
    it( 'adds an element to the set', () => {
      const mySet = new Set()
      expect(() => mySet.add( 'foo' ))
        .to.alter(() => mySet.size(), { from: 0, to: 1 })
      expect( mySet.contains( 'foo' )).to.be.true
    })

    it( 'does nothing if given element is already in the set', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      expect(() => mySet.add( 'foo' ))
        .not.to.alter(() => mySet.size() )
    })
  })

  context( 'size()', () => {
    it( 'is zero when the set is created', () => {
      const mySet = new Set()
      expect( mySet.size() ).to.deep.equal( 0 )
    })
    it( 'increases as items are added', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      mySet.add( 'bar' )
      expect( mySet.size() ).to.deep.equal( 2 )
    })
  })

  context( 'isEmpty()', () => {
    it( 'returns true for an empty set', () => {
      const mySet = new Set()
      expect( mySet.isEmpty() ).to.be.true
    })
    it( 'returns false if set contains any elements', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      mySet.add( 'bar' )
      expect( mySet.isEmpty() ).to.be.false
    })
  })

  context( 'contains()', () => {
    it( 'returns true if the set contains the element passed in', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      mySet.add( 'bar' )
      expect( mySet.contains( 'bar' )).to.be.true
    })
    it( 'returns false if the set does not contain the element passed in', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      mySet.add( 'bar' )
      expect( mySet.contains( 'buzz' )).to.be.false
    })
  })

  context( 'remove()', () => {
    it( 'removes the passed element from the set', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      mySet.add( 'bar' )
      expect(() => mySet.remove( 'foo' ))
        .to.alter(() => mySet.size(), { from: 2, to: 1 } )
      expect( mySet.contains( 'foo' )).to.be.false
      expect( mySet.contains( 'bar' )).to.be.true
    })

    it( 'if the passed element is not in the set, does nothing', () => {
      const mySet = new Set()
      mySet.add( 'foo' )
      mySet.add( 'bar' )
      expect(() => mySet.remove( 'buzz' ) )
        .not.to.alter(() => mySet.size() )
    })
  })

  context( 'forEach()', () => {
    it( 'takes callback function, passes it each element in sequence', () => {
      const mySet = new Set()
      mySet.add( 1 )
      mySet.add( 2 )
      mySet.add( 3 )
      let counter = 0
      const tally = input => counter += input;
      mySet.forEach( tally )
      expect( counter ).to.deep.equal( 6 )
    })
  })

  context( 'clone()', () => {
    it( 'returns a cloned set', () => {
      const originalSet = new Set()
      originalSet.add( 'foo' )
      originalSet.add( 'bar' )
      originalSet.add( 'pow' )
      const clonedSet = originalSet.clone()
      expect( clonedSet ).to.deep.eql( originalSet )
    })
  })

  context( 'union()', () => {
    it( 'unions the set with another set and returns the resulting set', () => {
      const firstSet = new Set()
      const secondSet = new Set()
      firstSet.add( 'A' )
      firstSet.add( 'B' )
      firstSet.add( 'C' )
      secondSet.add( 'B' )
      secondSet.add( 'C' )
      secondSet.add( 'E' )
      const unionSet = firstSet.union( secondSet )
      expect( unionSet.contains( 'A' )).to.be.true
      expect( unionSet.contains( 'B' )).to.be.true
      expect( unionSet.contains( 'E' )).to.be.true
      expect( unionSet.size()).to.deep.equal( 4 )
    })
  })

  context( 'intersect()', () => {
    it( 'intersects the set with another set and returns the resulting set', () => {
      const consonants = new Set()
      const vowels = new Set()
      consonants.add( 'X' )
      consonants.add( 'Y' )
      consonants.add( 'Z' )
      vowels.add( 'Y' )
      vowels.add( 'A' )
      vowels.add( 'E' )
      const intersectSet = consonants.intersect( vowels )
      expect( intersectSet.contains( 'A' )).to.be.false
      expect( intersectSet.contains( 'Z' )).to.be.false
      expect( intersectSet.contains( 'Y' )).to.be.true
      expect( intersectSet.size()).to.deep.equal( 1 )
    })
  })

  context( 'difference()', () => {
    it( 'returns a set that contains the elements found in the set but not in the other set', () => {
      const consonants = new Set()
      const vowels = new Set()
      consonants.add( 'X' )
      consonants.add( 'Y' )
      consonants.add( 'Z' )
      vowels.add( 'Y' )
      vowels.add( 'A' )
      vowels.add( 'E' )
      const differenceSet = consonants.difference( vowels )
      expect( differenceSet.contains( 'X' )).to.be.true
      expect( differenceSet.contains( 'Z' )).to.be.true
      expect( differenceSet.contains( 'Y' )).to.be.false
      expect( differenceSet.size()).to.deep.equal( 2 )
    })
  })

  context( 'isSubset( otherSet )', () => {
    it( 'returns true if the set is a subset of otherSet, false if not', () => {
      const mammals = new Set()
      const cats = new Set()
      mammals.add( 'bear' )
      mammals.add( 'mountain lion' )
      mammals.add( 'tiger' )
      mammals.add( 'leopard' )
      mammals.add( 'cow' )
      cats.add( 'mountain lion' )
      cats.add( 'tiger' )
      cats.add( 'leopard' )
      expect( cats.isSubset( mammals )).to.be.true
      expect( mammals.isSubset( cats )).to.be.false
    })
    it( 'returns true if the set is identical to otherSet', () => {
      const cats = new Set()
      cats.add( 'mountain lion' )
      cats.add( 'tiger' )
      cats.add( 'leopard' )
      const moarCats = cats.clone()
      expect( cats.isSubset( moarCats )).to.be.true
    } )
  })
})
