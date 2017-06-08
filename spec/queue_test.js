import chai, { expect } from 'chai'
import Queue from '../src/queue'

describe('Queue', () => {

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue', () => {
      const QueueAdd = new Queue()
      QueueAdd.enqueue('max')
      console.log(QueueAdd);
      expect(QueueAdd.back().data).to.equal('max')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const QueueDelete = new Queue()
      QueueDelete.enqueue('remove me')
      expect(QueueDelete.front().data).to.equal('remove me')
      QueueDelete.dequeue('remove me')
      expect(QueueDelete.front().data).to.equal('null')
    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const QueueFront = new Queue()
      QueueFront.enqueue('farts')
      console.log(QueueFront);
      expect(QueueFront.front()).to.equal('farts')
      QueueFront.dequeue('farts')
      expect(QueueFront.front()).to.equal(null)
    })
  })

  context('back()', () => {
    it('returns the back element in the queue or null if the queue is empty.', () => {
      const QueueBack = new Queue()
      QueueBack.enqueue('node1')
      QueueBack.enqueue('node2')
      expect(QueueBack.back()).to.equal('node2')
      QueueBack.dequeue('node1', 'node2')
      expect(QueueBack.back().to.equal(null))
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const QueueEmpty = new Queue()
      expect(QueueEmpty.isEmpty()).to.equal(true)
      QueueEmpty.enqueue('peaches')
      QueueEmpty.enqueue('pears')
      expect(QueueEmpty.isEmpty()).to.equal(false)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue', () => {
      const QueueLength = new Queue()
      QueueLength.enqueue('pizza')
      QueueLength.enqueue('french fries')
      expect(QueueLength.length()).to.equal(2)
    })
  })

})
