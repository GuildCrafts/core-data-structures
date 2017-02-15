import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/pQueue'

chai.use(chaiChange)

describe('PQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with a priority parameter', () => {
      const customerQueue = new PQueue()

      expect(() => customerQueue.enqueue('customer one', 100))
        .to.alter(() => customerQueue._length, { from: 0, to: 1 })

      expect(customerQueue._front).to.have.property("priority", 100)
    })
  })

  context('dequeue()', () => {
    it('returns the front element in the queue which is the highest priority', () => {
      const customerQueue = new PQueue()
      customerQueue.enqueue('customer one', 100)
      customerQueue.enqueue('customer two', 50)
      customerQueue.enqueue('customer three', 17)

      expect(customerQueue.dequeue()).to.equal('customer one')
    })

    it('removes the front element in the queue', () => {
      const customerQueue = new PQueue()
      customerQueue.enqueue('customer one', 100)
      customerQueue.enqueue('customer two', 50)
      customerQueue.dequeue()

      expect(customerQueue._front).to.have.property("next", null)
    })

    it('returns null if the queue is empty', () => {
      const customerQueue = new PQueue()

      expect(customerQueue.dequeue()).to.equal(null)
    })
  })
  context('front()', () => {
    it('returns the front element in the queue', () => {
      const customerQueue = new PQueue()
      customerQueue.enqueue('customer one', 100)
      customerQueue.enqueue('customer two', 50)
      customerQueue.enqueue('customer three', 17)

      expect(customerQueue.front()).to.equal('customer one')
    })

    it('returns null if the queue is empty', () => {
      const customerQueue = new PQueue()

      expect(customerQueue.front()).to.equal(null)
    })
  })

  context('back()', () => {
    it('returns the back element in the queue', () => {
      const customerQueue = new PQueue()
      customerQueue.enqueue('customer one', 100)
      customerQueue.enqueue('customer two', 50)
      customerQueue.enqueue('customer three', 17)

      expect(customerQueue.back()).to.equal('customer three')
    })

    it('returns null if the queue is empty', () => {
      const customerQueue = new PQueue()

      expect(customerQueue.back()).to.equal(null)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty', () => {
      const customerQueue = new PQueue()

      expect(customerQueue.isEmpty()).to.equal(true)
    })

    it('returns false if the queue is not empty', () => {
      const customerQueue = new PQueue()
      customerQueue.enqueue('customer one', 100)

      expect(customerQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()', () => {
    it('returns the length of the queue', () => {
      const customerQueue = new PQueue()
      customerQueue.enqueue('pizza', 25)
      customerQueue.enqueue('hot sauce', 21)
      customerQueue.enqueue('breadsticks', 29)
      customerQueue.enqueue('coke', 34)

      expect(customerQueue.length()).to.equal(4)
    })
  })




})
