import chai, { expect, assert } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'
  let myQueue
  beforeEach( () => {
    myQueue = new Queue()
  })

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('#enqueue(element)', () => {
    it('should add an element to the back of the queue', () => {
      expect(() => myQueue.enqueue("foo")).to.alter(() => myQueue.length(), { from: 0, to: 1 })
    })
  })

  context('#dequeue', () => {
    it('should remove and return the front element in the queue', () => {
      myQueue.enqueue("foo")
      myQueue.enqueue("bar")
      expect(myQueue.dequeue()).to.eql("foo")
      expect(() => myQueue.dequeue()).to.alter(() => myQueue.length(), { from: 1, to: 0 })
    })
    it('should return null if queue is empty', () => {
      expect(myQueue.dequeue()).to.eql(null)
    })
  })

  context('#front()', () => {
    it('should return the front element of the queue', () => {
      myQueue.enqueue("foo")
      expect(myQueue.front()).to.eql("foo")
      assert.unaltered(() => myQueue.front(), () => myQueue.length())
    })
    it('should return null if queue is empty', () => {
      expect(myQueue.front()).to.eql(null)
    })
  })

  context('#back()', () => {
    it('should return the back element in the queue', () => {
      myQueue.enqueue("foo")
      myQueue.enqueue("bar")
      expect(myQueue.back()).to.eql("bar")
      assert.unaltered(() => myQueue.back(), () => myQueue.length())
    })
    it('should return null if the queue is empty', () => {
      expect(myQueue.back()).to.eql(null)
    })
  })

  context('#isEmpty', () => {
    it('should return true if queue is empty', () => {
      expect(myQueue.isEmpty()).to.eql(true)
    })
    it('should return false if queue is not empty', () => {
      myQueue.enqueue(99)
      expect(myQueue.isEmpty()).to.eql(false)
    })
  })

  context('#length', () => {
    it('should return the number of elements in the queue', () => {
      myQueue.enqueue("foo")
      expect(myQueue.length()).to.eql(1)
      expect(() => myQueue.enqueue("bar")).to.alter(() => myQueue.length(), { from: 1, to: 2 })
    })
  })
})
