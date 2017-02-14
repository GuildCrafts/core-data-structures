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
})
