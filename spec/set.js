import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use( chaiChange )

describe( 'Set', () => {
  'use strict'

  it( 'exists' , () => {
    expect( Set ).to.be.a( 'function' )
  })

  describe( 'Takes one or no arguments', () => {
    const mySet = new Set(['foo'])
    const emptySet = new Set()

      context( 'add( arg )', () => {
        it( 'Adds an element to the set.', () => {
          expect( () => mySet.add( 'bar' ) )
          .to.alter( () => mySet.size(), { from: 1, to: 2 } )
        })
        it( 'Does not add duplicate elements to the set.', () => {
          expect( () => mySet.add( 'bar' ) )
            .to.not.alter( () => mySet.size() )
        })
      })

      context( 'isEmpty()', () => {
        it( 'Returns true if the set contains no values.', () => {
          expect( emptySet.isEmpty() ).to.eql( true )
        })
        it( 'Returns false if the set contains any values.', () => {
          expect( mySet.isEmpty() ).to.eql( false )
        })
      })

      context( 'contains( arg )', () => {
        it( 'returns true if the set contains arg.', () => {
          expect( mySet.contains( 'foo' ) ).to.be.true
        })
        it( 'returns false if the set does not contain arg.', () => {
          expect( mySet.contains( 'boo' ) ).to.be.false
        })
      })

      context( 'remove( arg )', () => {
        it( 'removes it from the list if it exists.', () => {
          expect( () => mySet.remove( 'boo' ) )
            .to.not.alter( () => mySet.size() )
          expect( () => mySet.remove( 'foo' ) )
            .to.alter( () => mySet.size(), { from: 2, to: 1 } )
        })
      })

      context( 'forEach( arg )', () => {
        it( 'Takes a callback function and passes each element through it.', () => {
          mySet.add( 'foo' )
          expect( mySet.forEach( element => '1' ) )
            .to.eql( [ '1', '1' ] )
        })
      })

      context( 'size()', () => {
        it( 'Returns the amount of items contained within the set.', () => {
          expect( mySet.size() ).to.eql( 2 )
        })
      })

      context( 'clone()', () => {
        it( 'Returns a copy of the set it is called on.', () => {
          const nextSet = mySet.clone()
          expect( nextSet.size() ).to.eql( 2 )
          expect( nextSet.contains( 'foo' ) ).to.be.true
          expect( () => nextSet.remove( 'foo' ) )
            .to.alter( () => nextSet.size(), { from: 2, to: 1 } )
        })
      })
  })

  describe.only( 'Takes two sets as arguments', () => {

    const setA = new Set([ 1, 2, 3, 5 ])
    const setB = new Set([ 2, 4, 5 ])
    const setC = new Set([ 2, 5 ])

      context( 'setA.union( setB )', () => {
        it( 'returns a new set with the combined values of the originals.', () => {
          expect( setA.union( setB ) ).to.eql([ 1, 2, 3, 4, 5 ])
        })
      })

      context( 'setA.intersect( setB )', () => {
        it( 'returns a new set with the shared values of the originals.', () => {
          expect( setA.intersect( setB ) ).to.eql([ 2, 5 ])
        })
      })

      context( 'setA.difference( setB )', () => {
        it( 'returns a new set with values contained in setA but not setB.', () => {
          expect( setA.difference( setB ) ).to.eql([ 1, 3 ])
          expect( setB.difference( setA ) ).to.eql([ 4 ])
        })
      })

      context( 'setB.isSubset( setA )', () => {
        it( 'returns true if setB is only has values found in setA.', () => {
          expect( setC.isSubset( setA ) ).to.be.true
        })
        it( 'returns false if setB contains values not found in setA.', () =>{
          expect( setB.isSubset( setA ) ).to.be.false
        })
      })
  })
})
