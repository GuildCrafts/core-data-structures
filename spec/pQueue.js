import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import pQueue from '../src/pQueue'

chai.use(chaiChange)

describe('pQueue', () => {
  'use strict'

  it('exists', () => {
    expect(pQueue).to.be.a('function')
  })

  context( 'topPriority()', () => {
    it( 'is the priority of the top element in the queue', () => {
      const queue = new pQueue()

      queue.enqueue( 'hi', 100 )

      expect( queue.topPriority() ).to.equal( 100 )
    })
  })

  context ('isEmpty()', () => {
    it('shows the current priority queue is empty.', () => {
      const aQueue = new pQueue()
      expect(aQueue.isEmpty())
        .to.equal(true)
    })
    it('returns false if the current priority queue is occupied.', () => {
      const aQueue = new pQueue([{'fewh' : 0}])
      expect(aQueue.isEmpty())
        .to.equal(false)
    })
  })

  context ('length()', () => {
    it('shows the length of the priority Queue.', () => {
      const aQueue = new pQueue()
      aQueue.enqueue({'ber': 15})
      expect(aQueue.length())
        .to.equal(1)
    })
  })

// adds an element with priority (number) to the back of the queue
  context('enqueue()', () => {
    it('adds an element with priority (number) the back of the queue.', () => {
      const aQueue = new pQueue()

      expect(() => aQueue.enqueue('foo'))
        .to.alter(() => aQueue.length(), { from: 0, to: 1 })
    })

    it('when a new item is added without a priority designated, it is assigned a default value of 0.', () => {
      const queue = new pQueue()

      queue.enqueue( 'hi' )

      expect( queue.topPriority() ).to.equal( 0 )

    })

    it('adds element into pQueue based on the element priority', () => {
      const aQueue = new pQueue()

      aQueue.enqueue('foo', 50)
      aQueue.enqueue('bar', 25)
      aQueue.enqueue('foobar', 100)

      expect( aQueue.front() ).to.be.equal( 'foobar' )
      expect( aQueue.back() ).to.be.equal( 'bar' )

    })
  })

  context('front()', () => {
    it('returns the element with the highest priority', () => {
      const aQueue = new pQueue()
      aQueue.enqueue('foo', 50)
      aQueue.enqueue('bar', 25)
      aQueue.enqueue('foobar', 100)

      expect( aQueue.front())
        .to.be.equal( 'foobar' )
    })
    it('returns a null value if the queue is empty.', () => {
      const aQueue = new pQueue()
      expect(() => aQueue.front()
        .to.equal(null))
    })
  })

  context( 'back()', () => {
    it( 'returns the lowest priority element in the queue', () => {
      const aQueue = new pQueue()
      aQueue.enqueue( 'hi', 45)
      aQueue.enqueue( 'hello', 15)
      aQueue.enqueue( 'hi there', 65)

      expect( aQueue.back()).to.be.equal( 'hello' )
    })
    it('returns a null value if the queue is empty.', () => {
      const aQueue = new pQueue()
      expect(() => aQueue.back()
        .to.equal(null))
    })
  })

  context('dequeue()', () => {
    it('removes an element from the front of the queue.', () => {
      const aQueue = new pQueue()
      aQueue.enqueue( 'hello', 15)
      aQueue.enqueue( 'hi there', 65)
      expect(() => aQueue.dequeue())
        .to.alter(() => aQueue.length(), { from: 2, to: 1 })
    })
    it('returns a null value if the queue is empty.', () => {
      const aQueue = new pQueue()
      expect(() => aQueue.dequeue()
        .to.equal(null))
    })
  })

})
