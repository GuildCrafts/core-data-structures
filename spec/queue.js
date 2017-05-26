import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

let queue

describe('Queue', () => {
  beforeEach('instantiates a new Queue before each test', () => {
    queue = new Queue()
  })

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue(value)', () => {
    it('adds an element to the back of the queue', () => {
      queue.enqueue('Jas')
      queue.enqueue('Aileen')

      expect(queue.enqueue('Sabrin')).to.eql(3)
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue', () => {
      queue.enqueue('Sabrin')
      queue.enqueue('Jas')
      queue.enqueue('Aileen')
      queue.dequeue('Sabrin')

      expect(queue._storage).to.eql({ '1': 'Jas', '2': 'Aileen' })
    })

    it('returns null if there is nothing in the queue', () => {

      expect(queue.dequeue()).to.eql(null)
    })
  })

  context('front()', () => {
    it('returns the front element in queue', () => {
      queue.enqueue('Jas')
      queue.enqueue('Aileen')

      expect(queue.front()).to.eql('Jas')
    })

    it('returns null if there is nothing in the queue', () => {

      expect(queue.front()).to.eql(null)
    })
  })

  context('isEmpty()', () => {
    it('returns the true if the queue is empty', () => {

      expect(queue.isEmpty()).to.eql(true)
    })

    it('returns false if there is something in the queue', () => {
      queue.enqueue('Jas')
      queue.enqueue('Aileen')

      expect(queue.isEmpty()).to.eql(false)
    })
  })

  context('back()', () => {
    it('returns the back element in the queue', () => {
      queue.enqueue('Jas')
      queue.enqueue('Aileen')
      queue.enqueue('Sabrin')

      expect(queue.back()).to.eql('Sabrin')
    })

    it('returns null if the queue is empty', () => {

      expect(queue.back()).to.eql(null)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue', () => {
      queue.enqueue('Jas')
      queue.enqueue('Aileen')
      queue.enqueue('Sabrin')

      expect(queue.length()).to.eql(3)
    })
  })

})