import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {

  it('exists', () => {

    expect(Queue).to.be.a('function')

  })

  context('enqueue', () => {
    const queue = new Queue()
    queue.enqueue('dumbass')
    queue.enqueue('Hella Weed')
    queue.enqueue('Dummy Weed')

    it('adds node containing string to the back of queue', () => {

      expect(queue.size).to.equal(3)
    })
  })

  context('dequeue')
})
