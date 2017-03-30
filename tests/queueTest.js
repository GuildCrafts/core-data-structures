import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue.js'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it ('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('box'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1})
    })
  })
  context('dequeue()', () => {
    it('removes an element from the front of the queue.', () => {
      const myQueue = new Queue()
      let removedItem = myQueue.dequeue()
      expect(removedItem).to.equal(null)
      myQueue.enqueue('apple')
      myQueue.enqueue('orange')
      myQueue.enqueue('pizza')
      let notNull = myQueue.dequeue()
      expect(notNull).to.eql('apple')
    })
  })
  context('front()', () => {
    it('returns the front element of the queue or null if empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.front()).to.equal(null)
      myQueue.enqueue('apple')
      myQueue.enqueue('orange')
      myQueue.enqueue('pizza')
      expect(myQueue.front()).to.equal('apple')
    })
  })
  context('back()', () => {
    it('returns the back element of the queue or null if empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.back()).to.equal(null)
      myQueue.enqueue('apple')
      myQueue.enqueue('orange')
      myQueue.enqueue('pizza')
      expect(myQueue.back()).to.equal('pizza')
    })
  })
  context('isEmpty()', () => {
    it('returns true if queue is empty or false if it is not', () => {
      const isEmptyQueue = new Queue()
      expect(isEmptyQueue.isEmpty()).to.equal(true)
      isEmptyQueue.enqueue('puppies')
      expect(isEmptyQueue.isEmpty()).to.equal(false)
    })
  })
})