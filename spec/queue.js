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
// queue.dequeue()      // returns and removes the front element in the queue or null if the queue is empty.
// queue.front()        // returns the front element in queue or null if the queue is empty.
// queue.back()         // returns the back element in the queue or null if the queue is empty.
// queue.isEmpty()      // returns true if the queue is empty or false if not.
// queue.length()       // returns the number of elements in the queue
})
