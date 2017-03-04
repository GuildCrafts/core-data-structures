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
    it('pushes an element to the end of the queue.', () => {
      const myQ = new Queue()

      expect(() => myQ.enqueue('tobias'))
        .to.alter(() => myQ.size, { from: null, to: 1 })
    })
  })

  context('clear()', () => {
    it('removes the first element from queue and reduces size', () => {
      const myQ = new Queue()
      myQ.enqueue(3)
      myQ.enqueue(2)

      expect(() => myQ.clear()).to.alter(() => myQ.size, { from: 2, to: 1 })
    })
  })

  context('dequeue()', () => {
    it('removes the first element from queue', () => {
      const myQ = new Queue()
      myQ.enqueue(3)
      myQ.enqueue(2)

      expect(() => myQ.dequeue()).to.alter(() => myQ.size, { from: 2, to: 1 })
    })
  })

  context('clearTill()', () => {
    it('clears all elements in queue till position passed', () => {})
  })

  context('clearAll()', () => {
    it('clears all elements in queue', () => {
      const myQ = new Queue()
      myQ.enqueue("sanders")
      myQ.enqueue("lee")

      expect(() => myQ.clearAll()).to.alter(() => myQ.size, { from: 2, to: null })
    })

  })

  context('length()', () => {
    it('returns the length of queue', () => {
      const myQ = new Queue()
      myQ.enqueue(3)
      myQ.enqueue(2)

      expect(myQ.length()).to.eql(2)
    })
  })

  context('front()', () => {
    it('returns the element at the front of the queue', () => {
      const myQ = new Queue()
      myQ.enqueue(3)
      myQ.enqueue(2)

      expect(myQ.front()).to.eql(3)
    })
  })

  context('back()', () => {
    it('returns the element at the back of the queue', () => {
      const myQ = new Queue()
      myQ.enqueue(3)
      myQ.enqueue(2)

      expect(myQ.back()).to.eql(2)
    })
  })

  context('isEmpty()', () => {
    it('returns a boolean of whether or not the queue is empty', () => {
      const myQ = new Queue()

      expect(myQ.isEmpty()).to.eql(true)
    })
  })

})
