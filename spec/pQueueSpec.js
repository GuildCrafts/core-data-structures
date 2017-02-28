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
      myPQueue.enqueue('foo', 2)
      expect(() => myPQueue.enqueue( 'foo', 2).to.equal('{foo:2}'));
      console.log(myPQueue)
    })
  })

})
