import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe.only('Queue', () => {
  const myQueue = new Queue()

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue..', () => {
      myQueue.enqueue('foo')
       expect(myQueue.newestIndex).to.equal(2)
       myQueue.enqueue('crash')
       myQueue.enqueue('bash')
       myQueue.enqueue('bang')
       expect(myQueue.newestIndex).to.equal(5)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      myQueue.dequeue()
       expect(myQueue.dequeue()).to.equal(3)
       myQueue.dequeue()
       myQueue.dequeue()
       myQueue.dequeue()
       expect(myQueue.dequeue()).to.equal(null)

    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      expect(myQueue.front()).to.equal(null)
      myQueue.enqueue('crash')
      myQueue.enqueue('bash')
      myQueue.enqueue('bang')
      myQueue.front()
      expect(myQueue.front()).to.equal(3)
     })
   })

})
