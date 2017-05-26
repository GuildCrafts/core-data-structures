import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use( chaiChange )

describe( 'Queue', () => {
  'use strict'
  const myQueue = new Queue

  it( 'exists', () => {
    expect( Queue ).to.be.a( 'function' )
  })

  context( 'enqueue()', () => {
    it( 'Adds an item to the back of the queue.', () => {
      expect( () => myQueue.enqueue( 'foo' ) )
        .to.alter( () => myQueue.length(), { from: 0, to: 1 } )
    })

    it( 'Does not add item to the front of the list.', () => {
      myQueue.enqueue( 'bar' )
      expect( () => myQueue.front() )
        .to.not.eql( 'bar' )
    })

    it( 'Increses the length of the collection by 1.', () => {
      expect( myQueue.length() ).to.eql( 2 )
    })

  })

  context( 'dequeue()', () => {
    it( 'Returns the item at the front of the queue.', () => {
      expect( myQueue.dequeue() ).to.eql( 'foo' )
    })

    it( 'Removes the item from the queue.', () => {
      expect( myQueue.front() ).to.eql( 'bar' )
    })

    it( 'Decreases the length property of the queue by 1.', () => {
      expect( myQueue.length() ).to.eql( 1 )
    })
  })

  context( 'front()', () => {
    it( 'Returns the item at the front of the queue.', () => {
      expect( myQueue.front() ).to.eql( 'bar' )
    })

    it( 'Does not remove the item from the queue', () => {
      expect( myQueue.front() ).to.eql( 'bar' )
    })

    it( 'Does not alter the length of the queue.', () => {
      expect( myQueue.length() ).to.eql( 1 )
    })

    it( 'Returns null if there are no items in the queue.', () => {
      myQueue.dequeue()
      expect( myQueue.front() ).to.eql.null
    })
  })

  context( 'back()', () => {
    it( 'Returns null if there are no items in the queue.', () =>{
      expect( myQueue.back() ).to.eql.null
    })

    it( 'Returns the item at the end of the queue.', () => {
      myQueue.enqueue( 'I' )
      myQueue.enqueue( 'AM' )
      myQueue.enqueue( 'GROOT')
      expect( myQueue.back() ).to.eql( 'GROOT' )
    })

    it( 'Does not remove the item from the queue.', () => {
      expect( myQueue.back() ).to.eql( 'GROOT' )
    })

    it( 'Does not alter the length of the queue.', () => {
      expect( myQueue.length() ).to.eql( 3 )
    })
  })

  context( 'isEmpty()', () => {
    const newQueue = new Queue()
    it( 'Returns true if there are no items in the queue.', () => {
      expect( newQueue.isEmpty() ).to.eql( true )
    })

    it( 'Returns false if there are items in the queue.', () => {
      newQueue.enqueue( 'stuff' )
      expect( newQueue.isEmpty() ).to.eql( false )
    })
  })

  context( 'length()', () => {
    it( 'Returns the number of items within the queue.', () => {
      expect( () => myQueue.dequeue() )
        .to.alter( () => myQueue.length(), { from: 3, to: 2 } )
    })
  })

})
