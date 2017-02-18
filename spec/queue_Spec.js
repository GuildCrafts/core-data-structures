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
    })
  })

  describe('dequeue()', () => {
    it('removes the front element in the queue.', () => {
      const queue = new Queue()
      queue.enqueue('goo')
      queue.enqueue('boo')
      queue.enqueue('foo')

      expect(queue.dequeue()).to.equal('goo')
    })

    it('returns null if the queue is empty', () => {
      const queue = new Queue()

      expect(queue.dequeue()).to.be.null
    })
  })

  describe('front()', () => {
    it('returns and removes the front element in queue or null if the queue is empty.', () => {
      const queue = new Queue()
      queue.enqueue('foo')
      expect(queue.front()).to.equal('foo')
    })
  })

  describe('back()', () => {
    it('returns the back element in the queue or null if the queue is empty.', () => {
      const queue = new Queue()
      expect(queue.back()).to.be.null
      queue.enqueue('foo')
      expect(queue.back()).to.equal('foo')
    })
  })

  describe('empty', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const queue = new Queue()
      expect(queue.empty()).to.be.true
    })
  })

})
