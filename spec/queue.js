import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('is a function', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the stack.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('first')
      myQueue.enqueue('second')

      expect(() => myQueue.enqueue('foo')).to.alter(() => myQueue.length(), { from: 2, to: 3 })
    })
  })

  context('dequeue()', () => {
    it('removes and returns the front element in the queue', () => {
      const myQueue = new Queue()

      myQueue.enqueue('first')
      myQueue.enqueue('second')
      myQueue.enqueue('third')

      expect(() => myQueue.dequeue()).to.alter(() => myQueue.length(), { from: 3, to: 2 })
      // expect()
    })

    it('reassigns top node', () => {
      const myQueue = new Queue()

      myQueue.enqueue('first')
      myQueue.enqueue('second')
      myQueue.enqueue('third')
      myQueue.dequeue()

      expect(myQueue.topNode.data).to.equal('second')
    })

    it('returns null if the stack is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.dequeue()).to.be.null
    })
  })

  context('isEmpty()', () => {
    it('returns true when stack is empty.', () => {
      const myQueue = new Queue()

      expect(myQueue.isEmpty()).to.true
    })

    it('returns false when stack is loaded.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('Car')
      
      expect(myQueue.isEmpty()).to.false
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('Car')
      myQueue.enqueue('MacBook')

      expect(myQueue.length()).to.equal(2)
    })
  })

  context('front()', () => {
    it('returns the front element of the queue or null if empty', () => {
      const myQueue = new Queue()

      myQueue.enqueue('front')
      myQueue.enqueue('back')
      
      expect(myQueue.front()).to.equal('front')
    })

    it('returns null if the stack is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.front()).to.be.null
    })
  })

  context('back()', () => {
    it('returns the back element of the queue or null if empty', () => {
      const myQueue = new Queue()

      myQueue.enqueue('front')
      myQueue.enqueue('back')
      
      expect(myQueue.back()).to.equal('back')
    })

    it('returns null if the stack is empty', () => {
      const myQueue = new Queue()

      expect(myQueue.back()).to.be.null
    })
  })

})