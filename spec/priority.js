import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it.only('Adds an element with priority number to the back of the queue.', () => {
      const myPQueue = new PriorityQueue()
      myPQueue.enqueue("foo", 100)
      expect(myPQueue.head.priority).to.equal(100)
    })
  })

  context('dequeue()', () => {
    it('Returns and removes the front element with the highest priority in the queue or null if the queue is empty', () => {
      const dequeue = new PriorityQueue()
      dequeue.enqueue("foo")
      expect(dequeue.dequeue().data).to.equal("foo")
    })
  })

  // context('front()', () => {
  //   it('Returns the front element in queue', () => {
  //     const front = new PriorityQueue()
  //     front.enqueue("foo")
  //     expect(front.front().data).to.equal("foo")
  //   })
  // })
  //
  // context('front()', () => {
  //   it('Check the front and returns null if the queue is empty', () => {
  //     const front = new PriorityQueue()
  //     expect(front.front()).to.equal(null)
  //   })
  // })
  //
  // context('back()', () => {
  //   it('Returns the back element in the queue.', () => {
  //     const back = new PriorityQueue()
  //     back.enqueue("foo")
  //     expect(back.back().data).to.equal("foo")
  //   })
  // })
  //
  // context('back()', () => {
  //   it('Returns null for the back element of an empty queue.', () => {
  //     const back = new PriorityQueue()
  //     expect(back.back()).to.equal(null)
  //   })
  // })
  //
  // context('isEmpty()', () => {
  //   it('Returns false if the queue is not empty. ', () => {
  //     const isEmpty = new PriorityQueue()
  //     isEmpty.enqueue('foo')
  //     expect(isEmpty.isEmpty()).to.equal(false);
  //   })
  // })
  //
  // context('isEmpty()', () => {
  //   it('Returns true if the queue is empty. ', () => {
  //     const isEmpty = new PriorityQueue()
  //     expect(isEmpty.isEmpty()).to.equal(true);
  //   })
  // })
  //
  // context('length()', () => {
  //   it('returns the number of elements in the queue ', () => {
  //     const length = new PriorityQueue()
  //     length.enqueue("foo")
  //     length.enqueue("roo")
  //     expect(length.length()).to.equal(2);
  //   })
})
