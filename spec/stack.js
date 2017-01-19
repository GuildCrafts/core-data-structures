import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)
  let stack 

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

  context('pop()', () => {
    it('removes the top element from the stack.', () => {
      const myStack = new Array()

      let stack = myStack.pop('foo')
      let stackLength = myStack.length

      expect(stackLength).to.equal(0)
    })
  })
})
