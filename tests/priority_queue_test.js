import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/priority_queue'

chai.use(chaiChange)

describe('PQueue', () => {

  'use strict'

  it('exists', () => {
    expect(PQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('pushes an element to the top of the queue.', () => {
      const myPQ = new PQueue()

      expect(() => myPQ.enqueue('foo',0))
        .to.alter(() => myPQ.size, { from: null, to: 1 })
    })
  })

})
