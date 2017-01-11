import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue', () => {
    it('adds an element to the back of the queue', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      expect(bankLine.length()).to.equal(1)
      expect(bankLine.tail).to.have.property('data', 'customer one')
    })
  })

  context('dequeue', () => {
    it('returns the front element in the queue', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      expect(bankLine.dequeue()).to.equal('customer one')
    })

    it('removes the front element in the queue', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.dequeue('customer one')
      expect(bankLine.length()).to.equal(0)
    })

    it('returns null if the queue is empty', () => {
      const bankLine = new Queue()

      expect(bankLine.dequeue()).to.equal(null)
    })
  })

  context('front', () => {
    it('returns the front element in the queue', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.enqueue('customer two')
      bankLine.enqueue('customer three')
      expect(bankLine.front()).to.equal('customer one')
    })

    it('returns null if the queue is empty', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.dequeue('customer one')
      expect(bankLine.front()).to.equal(null)
    })
  })

  context('back', () => {
    it('returns the back element in the queue', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.enqueue('customer two')
      bankLine.enqueue('customer three')
      expect(bankLine.back()).to.equal('customer three')
    })

    it('returns null if the queue is empty', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.dequeue('customer one')
      expect(bankLine.back()).to.equal(null)
    })
  })

  context('isEmpty', () => {
    it('returns true if the queue is empty', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.dequeue('customer one')
      expect(bankLine.isEmpty()).to.equal(true)
    })

    it('returns false if the queue is not empty', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      expect(bankLine.isEmpty()).to.equal(false)
    })
  })

  context('length', () => {
    it('returns the number of elements in the queue', () => {
      const bankLine = new Queue()

      bankLine.enqueue('customer one')
      bankLine.enqueue('customer two')
      bankLine.enqueue('customer three')
      bankLine.enqueue('customer four')
      expect(bankLine.length()).to.equal(4)
    })
  })

})
