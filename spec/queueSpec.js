import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)
describe.only('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue(element)', () => {
    it('pushes an element to the back of the list.', () => {
      const myQueue = new Queue()

      expect(() => myQueue.enqueue('foo')).to.alter(() => myQueue.length(), { from: 0, to: 1 })

      expect(() => myQueue.enqueue('boo')).to.alter(() => myQueue.length(), {from: 1, to: 2})

      expect(() => myQueue.enqueue('moo')).to.alter(() => myQueue.length(), {from: 2, to: 3})
    })
  })

  context('dequeue()',() => {
    it('removes elements from the front of list.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('boo')
      expect(() => myQueue.dequeue().to.equal('boo'));
    })
  })

  context('length()', () => {
    it('returns the length of the array', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      expect(() => myQueue.length(), { from: 0, to: 1 })
    })
  })

  context('front()',() => {
    it('returns the first element in the list and returns null if the value is null', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('boo')
      myQueue.enqueue('moo')
      expect(() => myQueue.front().to.equal('foo'));

      myQueue.dequeue('')
      myQueue.dequeue('boo')
      myQueue.dequeue()
      expect(() => myQueue.front().to.equal(null));
    })
  })

  context('back()', () => {
    it('returns the last element in the list and returns null if the value is null', () => {
      const myQueue = new Queue()
      myQueue.enqueue('foo')
      myQueue.enqueue('boo')
      expect(() => myQueue.back().to.equal('boo'));

      myQueue.dequeue()
      myQueue.dequeue()
      expect(() => myQueue.back().to.equal('null'));
    })
  })
})
