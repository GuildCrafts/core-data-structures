import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priority_queue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('is a function', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('empty queue', () => {
    const emptyQueue = new PriorityQueue()
    it('front() returns null', () => {
      expect(emptyQueue.front()).to.be.null
    })
    it('back() returns null', () => {
      expect(emptyQueue.back()).to.be.null
    })
    it('isEmpty() returns true', () => {
      expect(emptyQueue.isEmpty()).to.be.true
    })
    it('length() returns 0', () => {
      expect(emptyQueue.length()).to.be.equal(0)
    })
    it('dequeue() returns null', () => {
      expect(emptyQueue.dequeue()).to.be.null
    })
  })

  context('non-empty queue', () => {
    const pQueue = new PriorityQueue()
    pQueue.enqueue('bad', 10)
    pQueue.enqueue('ok', 50)
    pQueue.enqueue('good', 90)
    it('the element front() returns has priority 90', () => {
      expect(pQueue.front().getPriority()).to.be.equal(90)
    })
    it('the element front() returns has data “good”', () => {
      expect(pQueue.front().getData()).to.be.equal('good')
    })
    it('the element back() returns has priority 10', () => {
      expect(pQueue.back().getPriority()).to.be.equal(10)
    })
    it('isEmpty() returns false', () => {
      expect(pQueue.isEmpty()).to.be.false
    })
    it('length() returns 3', () => {
      expect(pQueue.length()).to.be.equal(3)
    })
    it('the element dequeue() returns has priority 90', () => {
      expect(pQueue.dequeue().getPriority()).to.be.equal(90)
    })
    it('the length is 2 after 1 dequeuing', () => {
      expect(pQueue.length()).to.be.equal(2)
    })
    it('the highest priority is 50 after 1 dequeuing', () => {
      expect(pQueue.front().getPriority()).to.be.equal(50)
    })
    it('the length is 3 after a valid enqueuing', () => {
      pQueue.enqueue('horrible', 0);
      expect(pQueue.length()).to.be.equal(3)
    })
    it('the length stays 3 after an invalid enqueuing', () => {
      pQueue.enqueue('wonderful', '100');
      expect(pQueue.length()).to.be.equal(3)
    })
  })

})
