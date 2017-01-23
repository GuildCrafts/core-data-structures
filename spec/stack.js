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
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()' , () => {
    it('removes top element from the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 1, to: 0 })
    })
    it('returns the top element from the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop().to.equal('foo'))   
    })
  })
})
