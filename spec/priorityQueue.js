import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context.only('enqueue()', () => {
    it('Adds a new entry to the back of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('foo', 1)
      myPriorityQueue.enqueue('bar', 2)
      expect(myPriorityQueue.obj).to.deep.equal({foo: 1, bar:2})
    })
  })

  context('dequeue()', () => {
    it('adds an element to the back of the queue', () => {
      const myPriorityQueue = new Queue()
      myPriorityQueue.enqueue('foo', 1)
      myPriorityQueue.enqueue('bar', 2)
      expect(myPriorityQueue.dequeue()).to.eql(['foo'])
    })
  })

  context('front()', () => {
    it('returns the top element of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('foo')
      myPriorityQueue.enqueue('bar')
      expect(myPriorityQueue.front()).to.eql('foo')
    })
  })

  context('back()', () => {
    it('returns the bottom element of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('foo')
      myPriorityQueue.enqueue('bar')
      expect(myPriorityQueue.back()).to.eql('bar')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the Queue has elements', () => {
      const myPriorityQueue = new PriorityQueue()
      expect(myPriorityQueue.isEmpty()).to.eql(true)
    })
  })

  context('length()', () => {
    it('returns the size of the Queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('foo')
      expect(myPriorityQueue.length()).to.eql(1)
    })
  })

})
