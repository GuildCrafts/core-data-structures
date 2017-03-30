import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue.js'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'

  it ('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the queue by priority', () => {
      const myPriorityQueue = new PriorityQueue()
      myPriorityQueue.enqueue('first box', 120)
      myPriorityQueue.enqueue('poop', 100)
      myPriorityQueue.enqueue('lemons', 90)
      myPriorityQueue.enqueue('last box', 15)
      myPriorityQueue.enqueue('poop', 34)
      myPriorityQueue.enqueue('lemons', 99)
      expect(() => myPriorityQueue.enqueue('farts', 80))
        .to.alter(() => myPriorityQueue.length(), { from: 6, to: 7})
      expect(myPriorityQueue.front.data).to.equal('first box')
      expect(myPriorityQueue.back.data).to.equal('last box')
    })
  })

  context('dequeue()', () => {
    it('removes an element from the front of the queue.', () => {
      const myPriorityQueue = new PriorityQueue()
      let removedItem = myPriorityQueue.dequeue()
      expect(removedItem).to.equal(null)
      myPriorityQueue.enqueue('apple', 15)
      myPriorityQueue.enqueue('orange', 90)
      myPriorityQueue.enqueue('pizza', 77)
      let notNull = myPriorityQueue.dequeue()
      expect(notNull).to.eql('orange')
    })
  })

  context('getFront()', () => {
    it('returns the front element of the queue or null if empty.', () => {
      const myPriorityQueue = new PriorityQueue()
      expect(myPriorityQueue.getFront()).to.equal(null)
      myPriorityQueue.enqueue('apple', 15)
      myPriorityQueue.enqueue('orange', 90)
      myPriorityQueue.enqueue('pizza', 77)
      myPriorityQueue.toString()
      expect(myPriorityQueue.getFront()).to.equal('orange')
    })
  })

  context('back()', () => {
    it('returns the back element of the queue or null if empty.', () => {
      const myPriorityQueue = new PriorityQueue()
      expect(myPriorityQueue.getBack()).to.equal(null)
      myPriorityQueue.enqueue('apple', 50)
      myPriorityQueue.enqueue('orange', 80)
      myPriorityQueue.enqueue('pizza', 77)
      myPriorityQueue.enqueue('last', -10)
      myPriorityQueue.toString()
      expect(myPriorityQueue.getBack()).to.equal('last')
    })
  })

  context('isEmpty()', () => {
    it('returns true if queue is empty or false if it is not', () => {
      const isEmptyQueue = new PriorityQueue()
      expect(isEmptyQueue.isEmpty()).to.equal(true)
      isEmptyQueue.enqueue('puppies', 100)
      expect(isEmptyQueue.isEmpty()).to.equal(false)
    })
  })
})
