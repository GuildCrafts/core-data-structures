import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  describe('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.elements.length, { from: 0, to: 1 })
      expect(() => queue.enqueue('bar'))
        .to.alter(() => queue.elements.length, { from: 1, to: 2 })
      expect(queue.elements[queue.elements.length - 1])
        .to.equal('bar')

    })
  })

  describe('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const queue = new Queue()

      queue.enqueue('cereal')
      queue.enqueue('almond milk')
      queue.enqueue('bananas')

      expect(() => queue.dequeue())
        .to.alter(() => queue.elements.length, { from: 3, to: 2 })
      expect(() => queue.dequeue())
        .to.alter(() => queue.elements.length, { from: 2, to: 1 })
      expect(() => queue.dequeue())
        .to.alter(() => queue.elements.length, { from: 1, to: 0 })
      expect(queue.dequeue())
        .to.be.null
      })
  })

  describe('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const queue = new Queue()
      const emptyQueue = new Queue()

      queue.enqueue('cereal')
      queue.enqueue('almond milk')
      queue.enqueue('bananas')

      expect(queue.front())
        .to.equal('cereal')
      expect(emptyQueue.front())
        .to.be.null
    })
  })

  describe('back()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const queue = new Queue()
      const emptyQueue = new Queue()

      queue.enqueue('cereal')
      queue.enqueue('almond milk')
      queue.enqueue('bananas')

      expect(queue.back())
        .to.equal('bananas')
      expect(emptyQueue.back())
        .to.be.null
    })
  })

  describe('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const queue = new Queue()
      const emptyQueue = new Queue()

      queue.enqueue('cereal')
      queue.enqueue('almond milk')
      queue.enqueue('bananas')

      expect(queue.isEmpty())
        .to.be.false
      expect(emptyQueue.isEmpty())
        .to.be.true
    })
  })

  describe('length()', () => {
    it('returns the number of elements in the queue', () => {
      const queue = new Queue()
      const emptyQueue = new Queue()

      queue.enqueue('cereal')
      queue.enqueue('almond milk')
      queue.enqueue('bananas')

      expect(queue.length())
        .to.equal(3)
      expect(emptyQueue.length())
        .to.equal(0)
    })
  })

})
