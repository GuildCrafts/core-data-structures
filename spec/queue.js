import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe.only('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.elements[1]).to.eql('bar')
    })
  })

  context('dequeue()', () => {
    it('adds an element to the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.dequeue()).to.deep.eql('foo')
    })
  })

  context('front()', () => {
    it('returns the top element of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.front()).to.eql('foo')
    })
  })

  context('back()', () => {
    it('returns the bottom element of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.back()).to.eql('bar')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the Queue has elements', () => {
      const myQueue = new Queue()
      expect(myQueue.isEmpty()).to.eql(true)
    })
    it('returns false if the Queue has elements', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      expect(myQueue.isEmpty()).to.eql(false)
    })
  })

  context('length()', () => {
    it('returns the size of the Queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      expect(myQueue.length()).to.eql(1)
    })
  })

})
