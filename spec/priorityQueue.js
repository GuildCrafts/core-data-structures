import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const myPQueue = new PriorityQueue()

      expect(() => myPQueue.enqueue('foo', 100))
        .to.alter(() => myPQueue.length(), { from: 0, to: 1 })
    })
  })

  // context('dequeue()', () => {
  //   it('returns and removes the front element in the queue or null if the queue is empty.', () => {
  //     const myQueue = new Queue()
  //
  //     myQueue.enqueue('foo')
  //     myQueue.enqueue('bar')
  //     expect( myQueue.dequeue() ).to.equal('foo')
  //   })
  // })
  //
  // context('dequeue()', () => {
  //   it('returns null on an empty queue.', () => {
  //     const myQueue = new Queue()
  //
  //     expect( myQueue.dequeue() ).to.equal(null)
  //   })
  // })
  //
  // context('front()', () => {
  //   it('returns the front element in a populated queue.', () => {
  //     const myQueue = new Queue()
  //
  //     myQueue.enqueue('foo')
  //     myQueue.enqueue('bar')
  //     expect( myQueue.front() ).to.equal('foo')
  //   })
  // })
  //
  // context('front()', () => {
  //   it('returns null on an empty queue.', () => {
  //     const myQueue = new Queue()
  //
  //     expect( myQueue.front() ).to.equal(null)
  //   })
  // })
  //
  // context('back()', () => {
  //   it('returns back element of a populated queue.', () => {
  //     const myQueue = new Queue()
  //
  //     myQueue.enqueue('foo')
  //     myQueue.enqueue('bar')
  //     expect( myQueue.back() ).to.equal('bar')
  //   })
  // })
  //
  // context('back()', () => {
  //   it('returns null on an empty queue', () => {
  //     const myQueue = new Queue()
  //
  //     expect( myQueue.back() ).to.equal(null)
  //   })
  // })
  //
  // context('isEmpty()', () => {
  //   it('returns true on a empty queue', () => {
  //     const myQueue = new Queue()
  //
  //     expect( myQueue.isEmpty() ).to.equal(true)
  //   })
  // })
  //
  // context('isEmpty()', () => {
  //   it('returns false on a populated queue', () => {
  //     const myQueue = new Queue()
  //
  //     myQueue.enqueue('foo')
  //     myQueue.enqueue('bar')
  //     expect( myQueue.isEmpty() ).to.equal(false)
  //   })
  // })
  //
  // context('length()', () => {
  //   it('returns the number of elements in the queue', () => {
  //     const myQueue = new Queue()
  //
  //     myQueue.enqueue('foo')
  //     myQueue.enqueue('bar')
  //     expect( myQueue.length() ).to.equal(2)
  //   })
  // })

})
