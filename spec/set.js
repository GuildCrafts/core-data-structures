import chai, { expect, assert } from 'chai'
import chaiChange from 'chai-change'
import sinon from 'sinon'
import Set from '../src/set'

chai.use(chaiChange)

describe.only( 'Set', () => {

  let mySet, myOtherSet, logger, logg

  beforeEach( () => {
    mySet = new Set()
    myOtherSet = new Set()
    logger = {
      log: ( message ) => {
        console.log( message )
      }
    }
    logg = sinon.spy( console, 'log' )
  })

  afterEach( () => {
    logg.restore()
  })

  it( 'exists', () => {
    expect( Set ).to.be.a( 'function' )
  })

  context( '#add( element )', () => {

    it( 'should add element to the Set', () => {
      expect( () => mySet.add( 5 ) ).to.alter( () => mySet.contains( 5 ), { from: false, to: true } )
      expect( () => mySet.add( 6 ) ).to.alter( () => mySet.size(), { from: 1, to: 2 } )
    })

    it( 'should throw an error if add is called with no parameter', () => {
      expect( () => mySet.add() ).to.throw( Error, 'No element available to add' )
    })

  })

  context( 'remove( element )', () => {

    it( 'should remove the given element from the set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      expect( () => mySet.remove( 5 ) ).to.alter( () => mySet.contains( 5 ), { from: true, to: false } )
    })

    it( 'should throw an error if given element is not in set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      expect( () => mySet.remove( 99 ) ).to.throw( Error, 'Element does not exist in set' )
    })

  })

  context( '#isEmpty()', () => {

    it( 'should return true if Set is empty', () => {
      expect( mySet.isEmpty() ).to.be.true
    })

    it( 'should return false if Set is empty', () => {
      mySet.add( 5 )
      expect( mySet.isEmpty() ).to.be.false
    })

  })

  context( '#size()', () => {

    it( 'should return the size of the Set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      mySet.add( 7 )
      expect( mySet.size() ).to.eql( 3 )
    })

    it( 'should return 0 if Set is empty', () => {
      expect( mySet.size() ).to.eql( 0 )
    })
  })

  context( '#contains( element )', () => {

    it( 'should return true if element exists in Set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      mySet.add( 7 )
      expect( mySet.contains( 6 ) ).to.be.true
    })

    it( 'should return false if element does not exist in the Set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      mySet.add( 7 )
      expect( mySet.contains( 99 ) ).to.be.false
    })
  })

  context( '#forEach( function )', () => {
    it( 'should apply function upon each element in the Set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      mySet.forEach( element => console.log( element ) )
      expect( logg.to.have.been.calledWith( '6' ) ).to.eql( '5' )
    })

  })

  context( '#clone()', () => {

    it( 'should return a Set object', () => {
      expect( mySet.clone() ).to.be.instanceof( Set )
      expect( mySet.clone() ).to.have.keys( '_data' )
    })

    it( 'should contain all of the elements of the cloned Set', () => {
      mySet.add( 5 )
      mySet.add( 6 )
      mySet.add( 7 )
      expect( mySet.clone() ).to.eql( { '_data': [ 5, 6, 7 ] } )
    })

  })

})
