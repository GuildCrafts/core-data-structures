import chai, { expect } from 'chai'
import Queue from '../src/queue'

describe('Stack', () => {
  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('bar')
      myQueue.enqueue('foo')

      expect(myQueue.back()).to.eq('foo')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue', () => {
      const myQueue = new Queue()

      myQueue.enqueue('bar')
      myQueue.enqueue('foo')

      expect(myQueue.dequeue()).to.eq('bar')
    })

    context('when queue is empty', () => {
      it('returns null', () => {
        const myQueue = new Queue()

        expect(myQueue.dequeue()).to.eq(null)
      })
    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const emptyQueue = new Queue()
      const nonEmptyQueue = new Queue()

      nonEmptyQueue.enqueue('foo')
      nonEmptyQueue.enqueue('bar')

      expect(emptyQueue.front()).to.eq(null)
      expect(nonEmptyQueue.front()).to.eq('foo')
    })
  })

  context('back()', () => {
    it('returns the back element in the queue or null if the queue is empty.', () => {
      const emptyQueue = new Queue()
      const nonEmptyQueue = new Queue()

      nonEmptyQueue.enqueue('foo')
      nonEmptyQueue.enqueue('bar')

      expect(emptyQueue.back()).to.eq(null)
      expect(nonEmptyQueue.back()).to.eq('bar')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const emptyQueue = new Queue()
      const nonEmptyQueue = new Queue()

      nonEmptyQueue.enqueue('foo')

      expect(emptyQueue.isEmpty()).to.eq(true)
      expect(nonEmptyQueue.isEmpty()).to.eq(false)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue', () => {
      const myQueue = new Queue()

      myQueue.enqueue('bar')
      myQueue.enqueue('foo')

      expect(myQueue.length()).to.eq(2)
    })
  })
})
