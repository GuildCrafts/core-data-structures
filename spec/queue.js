import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', function() {
  'use strict'

  it('is a function', function() {
    expect(Queue).to.be.a('function')
  })

  context('empty queue', function() {
    const emptyQueue = new Queue()
    it('front() returns null', function() {
      expect(emptyQueue.front()).to.be.null
    })
    it('back() returns null', function() {
      expect(emptyQueue.back()).to.be.null
    })
    it('isEmpty() returns true', function() {
      expect(emptyQueue.isEmpty()).to.be.true
    })
    it('length() returns 0', function() {
      expect(emptyQueue.length()).to.be.equal(0)
    })
    it('dequeue() returns null', function() {
      expect(emptyQueue.dequeue()).to.be.null
    })
  })

  context('non-empty queue', function() {
    const sQueue = new Queue()
    sQueue.enqueue('bad')
    sQueue.enqueue('ok')
    sQueue.enqueue('good')
    it('the element back() returns is “good”', function() {
      expect(sQueue.back().getData()).to.be.equal('good')
    })
    it('the element front() returns is “bad”', function() {
      expect(sQueue.front().getData()).to.be.equal('bad')
    })
    it('isEmpty() returns false', function() {
      expect(sQueue.isEmpty()).to.be.false
    })
    it('length() returns 3', function() {
      expect(sQueue.length()).to.be.equal(3)
    })
    it('the element dequeue() returns is “bad”', function() {
      expect(sQueue.dequeue().getData()).to.be.equal('bad')
    })
    it('the length is 2 after 1 dequeuing', function() {
      expect(sQueue.length()).to.be.equal(2)
    })
    it('the length is 3 after a valid enqueuing', function() {
      sQueue.enqueue('excellent')
      expect(sQueue.length()).to.be.equal(3)
    })
    it('the length stays 3 after an invalid enqueuing', function() {
      sQueue.enqueue()
      expect(sQueue.length()).to.be.equal(3)
    })
  })

})
