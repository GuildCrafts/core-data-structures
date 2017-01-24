import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe.only('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )

      expect( myQueue.back() ).to.eql( 'bar' )
    })
    it('increments the length', ()=> {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )
      expect( myQueue.length() ).to.eql( 2 )
    })
  })
  context('dequeue()', () => {
    it('returns and removes the front element', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'a' )
      myQueue.enqueue( 'b' )
      myQueue.enqueue( 'c' )
      myQueue.enqueue( 'd' )

      expect( myQueue.dequeue() ).to.eql( 'a' )
      expect( myQueue.front() ).to.not.eql( 'a' )
    })
    it('if queue is empty, returns null', () => {
      const myQueue = new Queue()
      myQueue.enqueue( 'foo' )
      myQueue.enqueue( 'bar' )

      expect( myQueue.back() ).to.eql( 'bar' )
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
