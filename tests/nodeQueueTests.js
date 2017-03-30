import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import nodeQueue from '../src/nodeQueue.js'

chai.use(chaiChange)

describe('nodeQueue', () => {
  'use strict'

  it ('exists', () => {
    expect(nodeQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const myNodeQueue = new nodeQueue()
      myNodeQueue.enqueue('box')
      myNodeQueue.enqueue('poop')
      myNodeQueue.enqueue('lemons')
      expect(() => myNodeQueue.enqueue('farts'))
        .to.alter(() => myNodeQueue.length(), { from: 3, to: 4})
    })
  })

  context('dequeue()', () => {
    it('removes an element from the front of the queue.', () => {
      const myNodeQueue = new nodeQueue()
      let removedItem = myNodeQueue.dequeue()
      expect(removedItem).to.equal(null)
      myNodeQueue.enqueue('apple')
      myNodeQueue.enqueue('orange')
      myNodeQueue.enqueue('pizza')
      console.log(myNodeQueue.toString())
      let notNull = myNodeQueue.dequeue()
      console.log(myNodeQueue.toString())
      expect(notNull).to.eql('apple')
    })
  })

  context('getFront()', () => {
    it('returns the front element of the queue or null if empty.', () => {
      const myNodeQueue = new nodeQueue()
      expect(myNodeQueue.getFront()).to.equal(null)
      myNodeQueue.enqueue('apple')
      myNodeQueue.enqueue('orange')
      myNodeQueue.enqueue('pizza')
      expect(myNodeQueue.getFront()).to.equal('apple')
    })
  })

  context('back()', () => {
    it('returns the back element of the queue or null if empty.', () => {
      const myNodeQueue = new nodeQueue()
      expect(myNodeQueue.getBack()).to.equal(null)
      myNodeQueue.enqueue('apple')
      myNodeQueue.enqueue('orange')
      myNodeQueue.enqueue('pizza')
      expect(myNodeQueue.getBack()).to.equal('pizza')
    })
  })

  context('isEmpty()', () => {
    it('returns true if queue is empty or false if it is not', () => {
      const isEmptyQueue = new nodeQueue()
      expect(isEmptyQueue.isEmpty()).to.equal(true)
      isEmptyQueue.enqueue('puppies')
      expect(isEmptyQueue.isEmpty()).to.equal(false)
    })
  })
})
