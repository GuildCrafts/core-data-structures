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
      expect(myPQueue.length).to.equal(1);
    })
  })

})

context('dequeue()', () => {
  it('removes a key-value pair from an object', () => {
    const myPQueue = new PQueue( 2, 'foo' )
    myPQueue.dequeue()
    expect(myPQueue.length).to.equal(0);
  })
})
