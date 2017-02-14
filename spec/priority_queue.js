import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority_queue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('highest priority items are added to the front of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'urgent', 100 )
      myPriorityQueue.enqueue( 'whenever', 5 )
      myPriorityQueue.enqueue( 'sometime soon', 50 )
      myPriorityQueue.enqueue( 'right now', 107 )
      expect( myPriorityQueue.front() ).to.deep.equal( 'right now' )
    })

    it('highest priority items are added to the front of the queue, case 2', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'd', 7 )
      myPriorityQueue.enqueue( 'a', 10 )
      myPriorityQueue.enqueue( 'c', 8 )
      myPriorityQueue.enqueue( 'f', 5 )
      myPriorityQueue.enqueue( 'b', 9 )
      myPriorityQueue.enqueue( 'e', 6 )

      expect( myPriorityQueue.front() ).to.deep.equal( 'a' )
    })

    it('increments the length', ()=> {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'foo' )
      myPriorityQueue.enqueue( 'bar' )
      expect( myPriorityQueue.length() ).to.deep.equal( 2 )
    })
  })

  context('front()', () => {
    it('returns the item at the front of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'urgent', 100 )
      myPriorityQueue.enqueue( 'whenever', 5 )
      myPriorityQueue.enqueue( 'right now', 107 )

      expect( myPriorityQueue.front() ).to.deep.equal( 'right now' )
    })

    it('returns null if called on an empty queue', ()=> {
      const myPriorityQueue = new PriorityQueue()
      expect( myPriorityQueue.front() ).to.be.null
    })
  })

  context('back()', () => {
    it('returns lowest priority item at back of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'a', 5000 )
      myPriorityQueue.enqueue( 'd', 5 )
      myPriorityQueue.enqueue( 'c', 50 )
      myPriorityQueue.enqueue( 'b', 500 )

      expect( myPriorityQueue.back() ).to.deep.equal( 'd' )
    })

    it('returns null if called on an empty queue', ()=> {
      const myPriorityQueue = new PriorityQueue()
      expect( myPriorityQueue.back() ).to.be.null
    })
  })

  context('dequeue()', () => {
    it('returns and removes the highest priority element', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'd', 5 )
      myPriorityQueue.enqueue( 'a', 5000 )
      myPriorityQueue.enqueue( 'c', 50 )
      myPriorityQueue.enqueue( 'b', 500 )

      expect( myPriorityQueue.dequeue() ).to.deep.equal( 'a' )
      expect( myPriorityQueue.front() ).to.not.deep.equal( 'a' )
    })

    it('if queue is empty, returns null', () => {
      const myPriorityQueue = new PriorityQueue()

      expect( myPriorityQueue.isEmpty() ).to.be.true
      expect( myPriorityQueue.dequeue() ).to.be.null
    })
  })
  context('isEmpty()', () => {
    it('returns true if the queue is empty', () => {
      const myPriorityQueue = new PriorityQueue()
      expect( myPriorityQueue.isEmpty() ).to.be.true
    })

    it('returns false if the queue contains items', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue( 'foo' )
      myPriorityQueue.enqueue( 'bar' )
      expect( myPriorityQueue.isEmpty() ).to.be.false
    })
  })
})
