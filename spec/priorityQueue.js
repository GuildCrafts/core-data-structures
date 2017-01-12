import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import priorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('priorityQueue', () => {
  let pQueue
  let emptyQueue
  beforeEach(() => {
    pQueue = new priorityQueue
    emptyQueue = new priorityQueue
    pQueue.enqueue('pizza', 80)
    pQueue.enqueue('bagel', 90)
    pQueue.enqueue('sock', 85)
  })


  context('enqueue()', () => {
    it('adds an element to the queue' , () => {
      const newQueue = new priorityQueue
    expect(() => newQueue.enqueue('pizza', 90))
    .to.alter(() => newQueue.length(), { from: 0, to: 1 })
    })
      const newQueue = new priorityQueue
      newQueue.enqueue('pizza', 90)
      newQueue.enqueue('potato', 100)
      newQueue.enqueue('something', 95)
    it('adds an element with priority to the back of the queue', () => {
      expect(newQueue).to.eql({queue: [['pizza', 90], ['something', 95], ['potato', 100]], index: 3})
    })
  })
  context('dequeue()', () => {
    it('reduces the queue by one', () => {
      pQueue.dequeue()
      expect(pQueue.index).to.equal(2)
      })
    })
  context('front()', () => {
    it('returns null if the queue is empty', () => {
      expect(emptyQueue.front()).to.equal(null)
    })
    it('returns the first element in the priorityQueue', () => {
      expect(pQueue.front()).to.equal('pizza')
    })
  })
  context('back()', () => {
    it('returns null if the queue is empty', () => {
      expect(emptyQueue.back()).to.equal(null)
    })
    it('returns the last item of the queue', () => {
      expect(pQueue.back()).to.equal('bagel')
    })
  })
  context('isEmpty()', () => {
    it('returns true if the array is empty', () => {
      expect(emptyQueue.isEmpty()).to.equal(true)
    })
  })
})
