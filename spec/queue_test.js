import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  const myQueue = new Queue()

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue..', () => {
      myQueue.enqueue('foo')
       expect(myQueue.newestIndex - myQueue.oldestIndex).to.equal(1)
       myQueue.enqueue('crash')
       myQueue.enqueue('bash')
       myQueue.enqueue('bang')
       expect(myQueue.newestIndex - myQueue.oldestIndex).to.equal(4)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      myQueue.dequeue()
       expect(myQueue.dequeue()).to.equal('foo')
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
      expect(myQueue.front()).to.equal('crash')
     })
   })

  context('back()', () => {
    it('returns the back element in the queue or null if the queue is empty.' , () => {
      const backQueue = new Queue()
      backQueue.enqueue('crash')
      backQueue.enqueue('bash')
      backQueue.enqueue('bang')
      expect(backQueue.back()).to.equal('bang')
      const emptyQueue = new Queue()
      expect(emptyQueue.back()).to.equal(null)
    })
  })

  context('isEmpty()' , () => {
    it('returns true if the queue is empty or false if not.', () => {
      const emptyQueue = new Queue()
      expect(emptyQueue.isEmpty()).to.equal(true)
      emptyQueue.enqueue('crash')
      emptyQueue.enqueue('bash')
      emptyQueue.enqueue('bang')
      expect(emptyQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()' , () => {
    it('returns the number of elements in the queue', () => {
      const lengthQueue = new Queue()
      expect(lengthQueue.length()).to.equal(0)
      lengthQueue.enqueue('crash')
      lengthQueue.enqueue('bash')
      lengthQueue.enqueue('bang')
      expect(lengthQueue.length()).to.equal()
    })
  })
})
