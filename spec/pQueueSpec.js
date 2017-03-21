import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/PQueue'

chai.use(chaiChange)
describe('PQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds a key value pair to an object.', () => {
      const myPQueue = new PQueue()
      myPQueue.enqueue(2, 'foo')
      console.log(myPQueue)
      expect(myPQueue.length).to.equal(1);
    })
  })

})
