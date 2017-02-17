import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
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
    it('Increases the size of the queue by 1 with each enqueue()', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      expect(myPriorityQueue.length()).to.deep.equal(1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.length()).to.deep.equal(2)
    })
  })

  context('dequeue()', () => {
    it('adds an element to the back of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.dequeue()).to.deep.eql({data: "Beelzebub", weight: 2, next: null})
    })
    it('Decreases the size of the queue by 1 with each dequeue()', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      myPriorityQueue.dequeue()
      expect(myPriorityQueue.length()).to.deep.equal(1)
      myPriorityQueue.dequeue()
      expect(myPriorityQueue.length()).to.deep.equal(0)
    })
  })

  context('front()', () => {
    it('Returns the top element of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 1)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.front()).to.eql({data: "Beelzebub", weight: 2, next: null})
    })
    it('If items have the same priority, it returns the item that first entered the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 2)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.front().data).to.eql("Azazel")
    })
  })

  context('back()', () => {
    it('returns the bottom element of the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 2)
      myPriorityQueue.enqueue('Beelzebub', 1)
      expect(myPriorityQueue.back().data).to.eql("Beelzebub")
    })
    it('If items have the same priority, it returns the item that last entered the queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 2)
      myPriorityQueue.enqueue('Beelzebub', 2)
      expect(myPriorityQueue.back().data).to.eql("Beelzebub")
    })
  })

  context('isEmpty()', () => {
    it('returns true if the Queue has elements', () => {
      const myPriorityQueue = new PriorityQueue()
      expect(myPriorityQueue.isEmpty()).to.eql(true)
    })
    it('returns false if the Queue has no elements', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('Azazel', 2)
      expect(myPriorityQueue.isEmpty()).to.eql(false)
    })
  })

  context('length()', () => {
    it('returns the size of the Queue', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('foo')
      expect(myPriorityQueue.length()).to.eql(1)
    })
    it('returns 0 if the queue is empty', () => {
      const myPriorityQueue = new PriorityQueue()
      expect(myPriorityQueue.length()).to.eql(0)
    })
  })

})
