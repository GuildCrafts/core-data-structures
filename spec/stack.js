import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)


describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Array()

      let stack = myStack.push('foo')
      stack = myStack.push('bar')
      let stackLength = myStack.length

      expect(stackLength).to.equal(2)
    })

  })
})
