import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  let myQueue
  let emptyQueue
  beforeEach(() => {
    emptyQueue = new Queue()
    myQueue = new Queue()
    myQueue.enqueue('foo')
    myQueue.enqueue(40)
    myQueue.enqueue('last')
  })
  // it('exists', () => {
  //   expect(Queue).to.be.a('function')
  // })

  context('enqueue()', () => {
      it('adds an element to the queue.', () => {
        const newQueue = new Queue()

        expect(() => newQueue.enqueue('foo'))
          .to.alter(() => newQueue.length(), { from: 0, to: 1 })

      it('is at the back of the queue.', () => {
          expect(() => newQueue.enqueue('Last Item'))
          .to.alter(() => myQueue[-1], {from: 'foo', to: 'Last Item'})
      })
    })
  })

  context('dequeue()', () => {
    it('reduces the queue by one.', () => {
  myQueue.dequeue()
      expect(myQueue.index).to.eql(2)
myQueue.dequeue()
      expect(myQueue.index).to.eql(1)
    })
    it('returns the first item of the queue.', () => {
      expect(myQueue.dequeue()).to.eql('foo')
  })
  })
  context('front()', () => {
    it('returns null if the queue is empty', () => {
      expect(emptyQueue.front()).to.equal(null)
    })
    it('does not change the length of the queue', () => {
      expect(myQueue.length()).to.eql(3)
    })
    it('returns the first item of the queue', () => {
      expect(myQueue.front()).to.eql('foo')
    })
  })

  context('back()', () => {
    it('returns null if the queue is empty', () => {
      expect(emptyQueue.back()).to.equal(null)
    })
    it('returns the last item of the queue', () => {
      expect(myQueue.back()).to.eql('last')
    })
  })
  context('isEmpty()', () => {
    it('returns true if the array is empty', () => {
      expect(emptyQueue.isEmpty()).to.equal(true)
    })
  })
})
