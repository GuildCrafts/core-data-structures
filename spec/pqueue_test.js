import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/pqueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()
      expect(() => pQueue.enqueue('a', 5))
        .to.alter(() => pQueue.length(), { from: 0, to: 1 })
      expect(() => pQueue.enqueue('b', 1))
        .to.alter(() => pQueue.length(), { from: 1, to: 2 })
      expect(() => pQueue.enqueue('c', 10))
        .to.alter(() => pQueue.length(), { from: 2, to: 3 })
    })
  })

  context('front()', () => {
    it('returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      expect( pQueue.front() ).to.equal(null)

      pQueue.enqueue('a', 10)
      pQueue.enqueue('b', 2)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('d', 1)
      pQueue.enqueue('e', 26)
      expect( pQueue.front() ).to.eql({data: 'd', priority: 1})
    })
  })

  context('back()', () => {
    it('returns the back element (lowest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      expect( pQueue.back() ).to.equal(null)

      pQueue.enqueue('a', 10)
      pQueue.enqueue('b', 2)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('d', 1)
      pQueue.enqueue('e', 26)
      expect( pQueue.back() ).to.eql({data: 'e', priority: 26})
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()

      pQueue.enqueue('a', 10)
      pQueue.enqueue('b', 2)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('c', 7)
      pQueue.enqueue('d', 1)
      pQueue.enqueue('e', 26)
      expect( pQueue.dequeue() ).to.eql({data: 'd', priority: 1})
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.',
    () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.isEmpty()).to.be.true

      pQueue.enqueue('d', 1)
      expect( pQueue.isEmpty()).to.be.false
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.',
    () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.length()).to.eql(0)

      pQueue.enqueue('d', 1)
      expect( pQueue.length()).to.eql(1)
    })
  })

})
