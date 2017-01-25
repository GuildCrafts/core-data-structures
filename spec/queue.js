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
      const myQueue = new Queue()

      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), {from: 0, to: 1})
    })
  })

  context('dequeue()', () => {
    it('removes an element in the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')

      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), {from: 1, to: 0})
    })

    it('returns null if empty.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.dequeue().to.equal(null))
    })

    it('returns the front element of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(() => myQueue.dequeue().to.equal('foo'))
    })
  })

  context('front()', () => {
    it('returns the front element in queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(() => myQueue.front().to.equal('foo'))
    })

    it('returns null if the queue is empty.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.front().to.equal(null))
    })

    it('doesn\'t change the length of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')

      expect(() => myQueue.front())
        .to.alter(() => myQueue.length(), {from: 1, to: 1})
    })
  })

  context('back()', () => {
    it('returns the back element in queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')

      expect(() => myQueue.back().to.equal('bar'))
    })

    it('returns null if the queue is empty.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.back().to.equal(null))
    })

    it('doesn\t change the length of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')

      expect(() => myQueue.back())
        .to.alter(() => myQueue.length(), {from: 1, to: 1})
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty', () =>{
      const myQueue = new Queue()

      expect(() => myQueue.isEmpty().to.equal(true))
    })
    it('returns false if the queue is not empty', () =>{
      const myQueue = new Queue()
      myQueue.enqueue('foo')

      expect(() => myQueue.isEmpty().to.equal(false))
    })
  })
})
