import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )

      expect( myQueue.back() ).to.deep.equal( 'bar' )
    })

    it('increments the length', ()=> {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )
      expect( myQueue.length() ).to.deep.equal( 2 )
    })
  })

  context('front()', () => {
    it('returns item at the front of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'a' )
      myQueue.enqueue( 'b' )
      myQueue.enqueue( 'c' )
      myQueue.enqueue( 'd' )

      expect( myQueue.front() ).to.deep.equal( 'a' )
    })

    it('returns null if called on an empty queue', ()=> {
      const myQueue = new Queue()
      expect( myQueue.front() ).to.be.null
    })
  })

  context('back()', () => {
    it('returns item at the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'a' )
      myQueue.enqueue( 'b' )
      myQueue.enqueue( 'c' )
      myQueue.enqueue( 'd' )

      expect( myQueue.back() ).to.deep.equal( 'd' )
    })

    it('returns null if called on an empty queue', ()=> {
      const myQueue = new Queue()
      expect( myQueue.back() ).to.be.null
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'a' )
      myQueue.enqueue( 'b' )
      myQueue.enqueue( 'c' )
      myQueue.enqueue( 'd' )

      expect( myQueue.dequeue() ).to.deep.equal( 'a' )
      expect( myQueue.front() ).to.not.deep.equal( 'a' )
    })

    it('if queue is empty, returns null', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )

      expect( myQueue.back() ).to.deep.equal( 'bar' )
    })
  })
  context('isEmpty()', () => {
    it('returns true if the queue is empty', () => {
      const myQueue = new Queue()
      expect( myQueue.isEmpty() ).to.be.true
    })

    it('returns false if the queue contains items', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )
      expect( myQueue.isEmpty() ).to.be.false
    })
  })
})
