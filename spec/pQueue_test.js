import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pQueue'

chai.use(chaiChange)

describe('Priority Queue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  describe('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()
      expect(() => pQueue.enqueue('foo', 200))
        .to.alter(() => pQueue.elements.length, { from: 0, to: 1 })
      expect(() => pQueue.enqueue('bar', 100))
        .to.alter(() => pQueue.elements.length, { from: 1, to: 2 })
      expect(pQueue.elements[pQueue.elements.length - 1])
        .to.deep.equal(['bar', 100])
    })
  })

  describe('front()', () => {
    it('returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      const emptyPQueue = new PriorityQueue()

      pQueue.enqueue('cereal', 100)
      pQueue.enqueue('almond milk', 300)
      pQueue.enqueue('blueberries', 400)
      pQueue.enqueue('bananas', 200)

      expect(pQueue.front())
        .to.deep.equal(['blueberries', 400])
      expect(emptyPQueue.front())
        .to.be.null

    })
  })

  describe('back()', () => {
    it('returns the back element (lowest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      const emptyPQueue = new PriorityQueue()

      pQueue.enqueue('cereal', 100)
      pQueue.enqueue('almond milk', 300)
      pQueue.enqueue('blueberries', 400)
      pQueue.enqueue('bananas', 200)

      expect(pQueue.back())
        .to.deep.equal(['cereal', 100])
      expect(emptyPQueue.back())
        .to.be.null

    })
  })

  describe('dequeue()', () => {
    it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      const emptyPQueue = new PriorityQueue()

      pQueue.enqueue('cereal', 100)
      pQueue.enqueue('almond milk', 300)
      pQueue.enqueue('blueberries', 400)
      pQueue.enqueue('bananas', 200)
      pQueue.enqueue('spoon', 500)

      expect(pQueue.dequeue())
        .to.deep.equal(['spoon', 500])
      expect(() => pQueue.dequeue())
        .to.alter(() => pQueue.elements.length, { from: 4, to: 3})
    })
  })

  describe('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const pQueue = new PriorityQueue()
      const emptyPQueue = new PriorityQueue()

      pQueue.enqueue('cereal')
      pQueue.enqueue('almond milk')
      pQueue.enqueue('bananas')

      expect(pQueue.isEmpty())
        .to.be.false
      expect(emptyPQueue.isEmpty())
        .to.be.true
    })
  })

  describe('length()', () => {
    it('returns the number of elements in the queue', () => {
      const pQueue = new PriorityQueue()
      const emptyPQueue = new PriorityQueue()

      pQueue.enqueue('cereal')
      pQueue.enqueue('almond milk')
      pQueue.enqueue('bananas')

      expect(pQueue.length())
        .to.equal(3)
      expect(emptyPQueue.length())
        .to.equal(0)
    })
  })

})
