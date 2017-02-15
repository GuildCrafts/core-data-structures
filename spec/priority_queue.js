import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority_queue'

chai.use( chaiChange )

describe( 'PriorityQueue', () => {
  'use strict'
  const myPQueue = new PriorityQueue()
  const emptyPQueue = new PriorityQueue()

  it( 'exists', () => {
    expect( PriorityQueue ).to.be.a( 'function' )
  })

  context( 'enqueue()', () => {
    it( 'Adds an element with priority to the queue.', () =>{
      expect( () => myPQueue.enqueue( 'foo', 10 ) )
      .to.alter( () => myPQueue.length(), { from: 0, to: 1 } )
    })
  })

  context( 'front()', () => {
    it( 'Returns the item with the highest priority value.', () => {
      myPQueue.enqueue( 'bar', 8 )
      expect( myPQueue.front() ).to.eql( 'foo' )
    })
    it( 'Does not remove the item from the collection.', () => {
      expect( myPQueue.front() ).to.eql( 'foo' )
    })
    it( 'Returns null if the collection is empty.', () => {
      expect( emptyPQueue.front() ).to.eql( null )
    })
  })

  context( 'back()', () => {
    it( 'Returns the item with the lowest priority value.', () => {
      expect( myPQueue.back() ).to.eql( 'bar' )
    })
    it( 'Does not remove the item from the collection.', () => {
      expect( myPQueue.back() ).to.eql( 'bar' )
    })
    it( 'Returns null if the collection is empty.', () => {
      expect( emptyPQueue.back() ).to.eql( null )
    })
  })

  context( 'dequeue()', () => {
    it( 'Returns and removes the item with the highest priority value.', () => {
      expect( myPQueue.dequeue() ).to.eql( 'foo' )
    })
    it( 'Reduces the length by 1.', () => {

      expect( myPQueue.length() ).to.eql( 1 )
    })
  })

  context( 'isEmpty()', () => {
    it( 'Returns false if the queue contains any items.', () => {
      expect( myPQueue.isEmpty() ).to.eql( false )
    })

    it( 'Returns true if queue does not contain any items.', () => {
      myPQueue.dequeue()
      expect( myPQueue.isEmpty() ).to.eql( true )
    })
  })

  context( 'length()', () => {
    it( 'Returns the amount of items in the queue.', () =>{
      expect( myPQueue.length() ).to.eql( 0 )
    })
  })


})
