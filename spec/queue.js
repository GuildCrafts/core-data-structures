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
    it('adds an element to the back of the queue.', () => {
      const aQueue = new Queue()

      expect(() => aQueue.enqueue('foo'))
        .to.alter(() => aQueue.length(), { from: 0, to: 1 })
    })
    it('pushes an element to the front of the queue when a new item is added.', () => {
      const aQueue = new Queue()

      aQueue.enqueue('bar')
      aQueue.enqueue('foo')

      expect(() => aQueue[0]
        .to.equal('bar'))
    })
  })

  context('dequeue()', () => {
    it('removes an element from the front of the queue.', () => {
      const aQueue = new Queue(['foo','bar'])
      expect(() => aQueue.dequeue())
        .to.alter(() => aQueue.length(), { from: 2, to: 1 })
    })
    it('returns a null value if the queue is empty.', () => {
      const aQueue = new Queue([])
      expect(() => aQueue.dequeue()
        .to.equal(null))
    })
  })

  context('front()', () => {
    it('returns the value from the front of the queue.', () => {
      const aQueue = new Queue(['foo','bar'])
      expect(() => aQueue.front()
        .to.equal('foo'))
    })
    it('returns a null value if the queue is empty.', () => {
      const aQueue = new Queue([])
      expect(() => aQueue.front()
        .to.equal(null))
    })
  })

  context('back()', () => {
    it('returns the value from the back of the queue.', () => {
      const aQueue = new Queue(['foo','bar'])
      expect(() => aQueue.back()
        .to.equal('bar'))
    })
    it('returns a null value if the queue is empty.', () => {
      const aQueue = new Queue([])
      expect(() => aQueue.back()
        .to.equal(null))
    })
  })

  context ('isEmpty()', () => {
    it('shows the current queue is empty.', () => {
      const aQueue = new Queue()
      expect(aQueue.isEmpty())
        .to.equal(true)
    })
    it('returns false if the current queue is occupied.', () => {
      const aQueue = new Queue()
      aQueue.enqueue('fewh')
      expect(aQueue.isEmpty())
        .to.equal(false)
    })
  })

  context ('length()', () => {
    it('shows the length of the Queue.', () => {
      const aQueue = new Queue()
      aQueue.enqueue('ber')
      expect(aQueue.length())
        .to.equal(1)
    })
  })


// queue.isEmpty()      // returns true if the queue is empty or false if not.
// queue.length()       // returns the number of elements in the queue
})
