import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue_src'

chai.use(chaiChange)

describe('Queue', () => {
  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const queue = new Queue()
      expect(() => queue.enqueue('foo'))
        .to.alter(() => queue.length(), {from:0 , to: 1})
      console.log('queue', queue)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const queue = new Queue()
      expect(() => queue.dequeue())
      .to.alter(() => queue.length(), {from:1 , to: 0})
      console.log('queue2', queue)
    })
  })








})
