import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import pQueue from '../src/pQueue'

chai.use(chaiChange)

describe('pQueue', () => {
  'use strict'

  it('exists', () => {
    expect(pQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the pQueue.', () => {
      const aQueue = new pQueue()

      expect(() => aQueue.enqueue('foo'))
        .to.alter(() => aQueue.length(), { from: 0, to: 1 })
    })
    it('pushes an element to the front of the pQueue when a new item is added.', () => {
      const aQueue = new pQueue()

      aQueue.enqueue('bar')
      aQueue.enqueue('foo')

      expect(() => aQueue[0]
        .to.equal('bar'))
    })
  })

  context('dequeue()', () => {
    it('removes an element from the front of the pQueue.', () => {
      const aQueue = new pQueue(['foo','bar'])
      expect(() => aQueue.dequeue())
        .to.alter(() => aQueue.length(), { from: 2, to: 1 })
    })
    it('returns a null value if the pQueue is empty.', () => {
      const aQueue = new Queue([])
      expect(() => aQueue.dequeue()
        .to.equal(null))
    })
  })

  context('front()', () => {
    it('returns the value from the front of the pQueue.', () => {
      const aQueue = new Queue(['foo','bar'])
      expect(() => aQueue.front()
        .to.equal('foo'))
    })
    it('returns a null value if the pQueue is empty.', () => {
      const aQueue = new Queue([])
      expect(() => aQueue.front()
        .to.equal(null))
    })
  })
