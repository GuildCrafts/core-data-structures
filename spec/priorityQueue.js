import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe.only('PriorityQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('Adds a new entry to the back of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.head.data).to.deep.equal("Azazel")
      expect(myPriorityQueue.head.next.data).to.deep.equal("Beelzebub")
    })
  })

  context('dequeue()', () => {
    it('adds an element to the back of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.dequeue()).to.deep.eql({data: "Beelzebub", weight: 2, next: null})
    })
  })

  context('front()', () => {
    it('returns the top element of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.front()).to.eql({data: "Beelzebub", weight: 2, next: null})
    })
  })

  context('back()', () => {
    it('returns the bottom element of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.back().data).to.eql("Azazel")
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
