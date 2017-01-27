import chai, { expect } from 'chai'

import PriorityQueue from '../src/priority_queue'

let pQ

describe('PriorityQueue', () => {

  beforeEach(() => {
    pQ = new PriorityQueue()
  })

  context('enqueue', () => {
    it('adds a element to the back of the queue with the given priority', () => {
      pQ.enqueue('pizza', 100)
      pQ.enqueue('salad', 50)
      pQ.enqueue('chocolate', 600)
      pQ.enqueue('more salad', 50)

      expect(pQ.queue[0]).to.eql({ node: 'chocolate', priority: 600 })
      expect(pQ.queue[pQ.queue.length -1]).to.eql({ node: 'more salad', priority: 50})
    })
  })

  context('front', () => {
    it('returns the highest priority element in the queue', () => {
      pQ.enqueue('pizza', 100)
      pQ.enqueue('salad', 50)
      pQ.enqueue('chocolate', 600)
      expect(pQ.front()).to.eql('chocolate')
    })
  })

  context('back', () => {
    it('returns the lowest priority element from the back of the queue', () => {
      pQ.enqueue('pizza', 100)
      pQ.enqueue('salad', 50)
      pQ.enqueue('chocolate', 600)

      expect(pQ.back()).to.eql('salad')
    })
  })

  context('dequeue', () => {
    it('returns and removes the highest priority element from the queue', () => {
      pQ.enqueue('pizza', 100)
      pQ.enqueue('salad', 50)
      pQ.enqueue('chocolate', 600)

      expect(pQ.dequeue()).to.eql({node: 'chocolate', priority: 600})
      expect(pQ.queue).to.not.include({node: 'chocolate', priority: 600})

    })
    it('returns null if there is nothing in the queue', () => {
      expect(pQ.dequeue()).to.eql(null)
    })
  })

  context('isEmpty', () => {
    it('returns true if the queue is empty', () => {
      expect(pQ.isEmpty()).to.eql(true)
    })
    it('returns false if the queue is empty', () => {
      pQ.enqueue('pizza', 100)

      expect(pQ.isEmpty()).to.eql(false)
    })
  })

  context('length', () => {
    it('returns the number of elements in the queue', () => {
      pQ.enqueue('pizza', 100)
      pQ.enqueue('salad', 50)
      pQ.enqueue('chocolate', 600)

      expect(pQ.length()).to.eql(3)
    })
  })


})
