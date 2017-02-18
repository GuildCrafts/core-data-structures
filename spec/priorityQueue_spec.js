import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue_src'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })


  describe('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('pie', 60)
      pQueue.enqueue('soda', 80)

      expect(pQueue.dataStore).to.deep.equal([{element: 'pizza', number : 100}, {element: 'soda', number: 80}, {element: 'pie', number: 60}])
      console.log('dataStore', pQueue.dataStore)
    })

    it('increments the length when a new item is added to the queue', () => {
      const pQueue = new PriorityQueue()

      pQueue.enqueue('popcorn', 100)
      pQueue.enqueue('candy', 80)
      pQueue.enqueue('pasta', 60)

      expect(pQueue.length()).to.equal(3)
    })

    it('sorts the elements in the queue in ascending order', () => {
      const pQueue = new PriorityQueue()

      pQueue.enqueue('a', 100)
      pQueue.enqueue('c', 60)
      pQueue.enqueue('b', 80)

      expect(pQueue.dataStore).to.deep.equal([{element: 'a', number: 100}, {element: 'b', number: 80}, {element: 'c', number: 60}])
      console.log('watru', pQueue.dataStore)
    })
  })

  describe.only('dequeue', () => {
    it('returns and removes the front element (highest priority) in the queue or null if the queue is empty', () => {
      const pQueue = new PriorityQueue()

      pQueue.enqueue('popcorn', 100)
      pQueue.enqueue('chicken', 80)
      pQueue.enqueue('potatoe', 60)

      pQueue.dequeue()

      expect(pQueue.dataStore).to.deep.equal([{element: 'chicken', number: 80}, {element: 'potatoe', number: 60}])
    })

    it('removes the front element (highest priority) in the queue', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('popcorn', 100)
      pQueue.enqueue('chicken', 80)
      pQueue.enqueue('potatoe', 60)

      expect(pQueue.dequeue()).to.deep.equal({element: 'popcorn', number: 100})
    })

    it('returns null if the queue is empty', () => {
      const pQueue = new PriorityQueue()

      expect(pQueue.dequeue()).to.deep.be.null
    })
  })






})
