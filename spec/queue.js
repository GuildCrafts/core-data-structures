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
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('yass'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
      expect(() => myQueue.enqueue('hello'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect( myQueue.peek() ).to.equal('foo')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('yas'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
      expect(() => myQueue.enqueue('tee'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect(() => myQueue.dequeue())
        .to.alter(() => myQueue.length(), { from: 3, to: 2 })
      expect( myQueue.peek() ).to.equal('yas')
    })
  })

    it( 'returns null if the stack is empty', () => {
      const myQueue = new Queue()
      expect( myQueue.dequeue() ).to.be.null
    })

})
