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
    it('Adds an element to the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.elements[1]).to.eql('bar')
    })
    it('Increases the size of the Queue by one with each enqueue()', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      expect(myQueue.length()).to.eql(1)
      myQueue.enqueue('bar')
      expect(myQueue.length()).to.eql(2)
    })
  })

  context('dequeue()', () => {
    it('Removes and returns an element to the back of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.dequeue()).to.deep.eql('foo')
    })
    it('Decreases the size of the Queue by 1 with each dequeue()', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      myQueue.dequeue()
      expect(myQueue.length()).to.eql(1)
      myQueue.dequeue()
      expect(myQueue.length()).to.eql(0)
    })
  })

  context('front()', () => {
    it('Returns the top element of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.front()).to.eql('foo')
    })
    it('Returns null if the queue is empty', () => {
      const myQueue = new Queue()
      expect(myQueue.front()).to.eql(null)
    })
  })

  context('back()', () => {
    it('Returns the bottom element of the queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect(myQueue.back()).to.eql('bar')
    })
    it('Returns null if the queue is empty', () => {
      const myQueue = new Queue()
      expect(myQueue.back()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('Returns true if the Queue has elements', () => {
      const myQueue = new Queue()
      expect(myQueue.isEmpty()).to.eql(true)
    })
    it('Returns false if the Queue has elements', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      expect(myQueue.isEmpty()).to.eql(false)
    })
  })

  context('length()', () => {
    it('Returns the size of the Queue', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      expect(myQueue.length()).to.eql(1)
    })
    it('Returns 0 if the Queue is empty', () => {
      const myQueue = new Queue()
      expect(myQueue.length()).to.eql(0)
    })
  })

})
