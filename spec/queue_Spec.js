import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue_src'

chai.use(chaiChange)

describe('Queue', () => {
  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const queue = new Queue()
      queue.enqueue('foo')
      queue.enqueue('boo')
      queue.enqueue('ooo')
      expect(queue.length()).to.eql(3)
      console.log('queue', queue)
    })
  })

  describe('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const queue = new Queue()
      expect(() => queue.dequeue())
      .to.alter(() => queue.length(), {from: 1 , to: 0})
      console.log('queue2', queue.dequeue())
    })
  })

  describe('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const queue = new Queue()
      expect(queue.front()).to.be.null
      queue.push('foo')
      expect(queue.front()).to.eql('foo')
      console.log('front', queue.front())
    })
  })

  describe('empty', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const queue = new Queue()
      expect(queue.empty()).to.be.true
    })
  })





})
