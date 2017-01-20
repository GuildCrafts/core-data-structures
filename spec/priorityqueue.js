import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityqueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')

  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()

      pQueue.enqueue('dude', 90)
      pQueue.enqueue('cool', 20)
      pQueue.enqueue('turd', 50)
      expect(pQueue.enqueue('foo',70)).to.eql([{name: 'dude', priority: 90},  {name: 'foo', priority: 70},{name: 'turd', priority: 50}, {name: 'cool',  priority: 20}])
    })
  })
  // context('front()', () => {
  //   it('returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
  //     const pQueue = new PriorityQueue()
  //     pQueue.enqueue('dude', 90)
  //     pQueue.enqueue('cool', 20)
  //     pQueue.enqueue('turd', 50)
  //     expect(pQueue.front()).to.eql({name: 'dude', priority: 90 })
  //   })
  //   it('returns null if the array if empty', () => {
  //     const pQueue = new PriorityQueue()
  //     expect(pQueue.front()).to.eql(null)
  //   })
  // })

  // context('dequeue()', () => {
  //   it('removes the front element of the highest priority in the queue.', () => {
  //     const pQueue = new PriorityQueue()

  //     pQueue.dequeue('word', 10)
  //     pQueue.dequeue('bird', 70)
  //     pQueue.dequeue('herd', 30)

  //     expect(pQueue.dequeue()).to.eql([{name: 'bird', priority: 70}])
  //   })
  // })

  context('isEmpty()', () => {
    it('returns true if the stack is empty.', () => {
      const pQueue = new PriorityQueue()

      expect(pQueue.isEmpty()).to.eql(true)
      pQueue.enqueue('word', 10)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const pQueue = new Array()

      let queue = pQueue.push('word', 10)
      queue = pQueue.push('bird', 70)
      queue = pQueue.push('herd', 30)

      let queueLength = pQueue.length

      expect(queueLength).to.equal(6)
    })
  })
})
