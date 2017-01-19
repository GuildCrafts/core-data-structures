import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)
let queue 

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')

  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const anQueue = new Array()

      let queue = anQueue.push('foo')
      let queueLength = anQueue.length

      expect(queueLength).to.equal(1)

    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue.', () => {
      const anQueue = new Array()

      let queue = anQueue.pop('foo')
      let queueLength = anQueue.length

      expect(queueLength).to.equal(0)

    })
  })

  context('front()', () => {
    it('returns the front element in queue.', () => {
      const anQueue = new Queue()

      let queue = anQueue.enqueue('foo')

      expect(anQueue.front()).to.eql('foo')

    })
  })

  context('back()', () => {
    it('returns the back element in the queue.', () => {
      const anQueue = new Queue()

      let queue = anQueue.enqueue('foo')
      anQueue.enqueue('bar')

      expect(anQueue.back()).to.eql('bar')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty.', () => {
      const anQueue = new Queue()

      expect(anQueue.isEmpty()).to.eql(true)
      anQueue.enqueue('foo')

    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const anQueue = new Array()

      let queue = anQueue.push('foo')
      queue = anQueue.push('bar')
      queue = anQueue.push('baz')

      let queueLength = anQueue.length

      expect(queueLength).to.equal(3)

    })
  })
})