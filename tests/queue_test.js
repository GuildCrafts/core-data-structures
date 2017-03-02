import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('pushes an element to the end of the queue.', () => {
      const myQ = new Queue()

      expect(() => myQ.enqueue('tobias'))
        .to.alter(() => myQ.size, { from: null, to: 1 })
    })
  })

})
