import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
      const myQueue = new Queue()
      expect(() => myQueue.enqueue('a'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
      expect(() => myQueue.enqueue('b'))
        .to.alter(() => myQueue.length(), { from: 1, to: 2 })
      expect(() => myQueue.enqueue('c'))
        .to.alter(() => myQueue.length(), { from: 2, to: 3 })
      expect( myQueue.back() ).to.deep.eql('c')
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null for empty queue.', () => {
      const myQueue = new Queue()

      myQueue.enqueue('a')
      myQueue.enqueue('b')
      myQueue.enqueue('c')
        //        [ a, b, c ]
      expect( myQueue.dequeue() ).to.equal('a')
      expect( myQueue.dequeue() ).to.equal('b')

    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      expect( myQueue.front() ).to.deep.eql(null)

      myQueue.enqueue('a')
      myQueue.enqueue('b')
      myQueue.enqueue('c')
      expect( myQueue.front() ).to.deep.eql('a')
    })
  })

  context('back()', () => {
    it('returns the back element in the queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      expect( myQueue.back() ).to.deep.eql(null)

      myQueue.enqueue('a')
      myQueue.enqueue('b')
      myQueue.enqueue('c')
      expect( myQueue.back() ).to.deep.eql('c')
    })
  })

  context('isEmpty()', () => {
    it('returns true is the queue is empty, false if not', () => {
      const myQueue = new Queue()
      expect( myQueue.isEmpty()).to.be.true

      myQueue.enqueue('a')
      expect( myQueue.isEmpty()).to.be.false
    })
  })

  context('length()', () => {
    it.only('returns length of queue',
    () => {
      let myQueue = new Queue()
      expect(myQueue.length() ).to.eql(0)

      myQueue = new Queue()
      myQueue.enqueue('a')
      expect( myQueue.length() ).to.eql(1)

      myQueue = new Queue()
      myQueue.enqueue('a')
      myQueue.enqueue('b')
      console.log('myQueue', myQueue)
      expect( myQueue.length() ).to.eql(2)

      myQueue = new Queue()
      myQueue.enqueue('a')
      myQueue.enqueue('b')
      myQueue.enqueue('c')
      expect( myQueue.length() ).to.eql(3)
    })
  })

})
