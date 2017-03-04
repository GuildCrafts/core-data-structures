import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/priority_queue'

chai.use(chaiChange)

describe('PQueue', () => {

  'use strict'

  it('exists', () => {
    expect(PQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('pushes an element to the top of the queue.', () => {
      const myPQ = new PQueue()

      expect(() => myPQ.enqueue('foo',0))
        .to.alter(() => myPQ.size, { from: null, to: 1 })
    })
  })

  context('front()', () => {
    it('returns the element at the front of the queue', () => {
      const myPQ = new PQueue()
      myPQ.enqueue(3,0)
      myPQ.enqueue(2,0)

      expect(myPQ.front()).to.eql(3)
    })
  })

  context('dequeue()', () => {
    it('removes the first element from queue', () => {
      const myPQ = new PQueue()
      myPQ.enqueue(3,0)
      myPQ.enqueue(2,0)

      expect(() => myPQ.dequeue().to.alter(() => { myPQ.size, { from: 2, to: 1 }}))
    })
  })

  context('back()', () => {
    it('returns the element at the back of the queue', () => {
      const myPQ = new PQueue()
      myPQ.enqueue(3,0)
      myPQ.enqueue(2,0)

      expect(myPQ.back()).to.eql(2)
    })
  })

  context('isEmpty()', () => {
    it('returns a boolean of whether or not the queue is empty', () => {
      const myPQ = new PQueue()
      myPQ.enqueue(3,0)

      expect(myPQ.isEmpty()).to.eql(false)
    })
  })

  context('length()', () => {
    it('returns the length of queue', () => {
      const myPQ = new PQueue()
      myPQ.enqueue(1,0)
      myPQ.enqueue(2,0)
      myPQ.enqueue(3,1)

      expect(myPQ.length()).to.eql(3)
    })
  })

  context('showAll()', () => {
    it('returns all the elements in the priority queue', () => {
      const myPQ = new PQueue()
      myPQ.enqueue(1,0)
      myPQ.enqueue(2,0)
      myPQ.enqueue(3,1)

      expect(myPQ.showAll()).to.eql([[3],[1,2]])
    })
  })

})
