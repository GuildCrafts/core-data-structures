import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe.only('PriorityQueue', () => {
  'use strict'

  it('is a function', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the stack.', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('first, with pri: 10', 10)
      myQueue.enqueue('second, with pri: 5', 5)
      myQueue.enqueue('third, with highest pri', 100)

      // console.log('=-=-=-=-\nFRONT NODE:', myQueue.frontNode)

      expect(() => myQueue.enqueue('foo')).to.alter(() => myQueue.length(), { from: 0, to: 1 })
    })

  })

  context('dequeue()', () => {
    xit('returns and removes the front element in the queue', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('front')
    
      expect(() => myQueue.dequeue()).to.alter(() => myQueue.length(), { from: 1, to: 0 })
    })

    xit('returns null if the stack is empty', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.dequeue()).to.be.null
    })
  })

  context('isEmpty()', () => {
    xit('returns true when stack is empty.', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.isEmpty()).to.true
    })

    xit('returns false when stack is loaded.', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('Car')
      
      expect(myQueue.isEmpty()).to.false
    })
  })

  context('length()', () => {
    xit('returns the number of elements in the stack.', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('Car')
      myQueue.enqueue('MacBook')

      expect(myQueue.length()).to.equal(2)
    })
  })

  context('front()', () => {
    xit('returns the front element of the queue or null if empty', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('front')
      myQueue.enqueue('back')

      expect(myQueue.front()).to.equal('front')
    })

    xit('returns null if the stack is empty', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.front()).to.be.null
    })
  })

  context('back()', () => {
    xit('returns the back element of the queue or null if empty', () => {
      const myQueue = new PriorityQueue()

      myQueue.enqueue('front')
      myQueue.enqueue('back')
      
      expect(myQueue.back()).to.equal('back')
    })

    xit('returns null if the stack is empty', () => {
      const myQueue = new PriorityQueue()

      expect(myQueue.back()).to.be.null
    })
  })

})