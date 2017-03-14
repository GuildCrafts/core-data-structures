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
        console.log(myStack)
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      myStack.push('One')
      console.log(myStack)
      console.log(myStack.length)
      expect(() => myStack.pop()).to.alter(() => myStack.length(), { from: 1, to: 0 })
      console.log(myStack)
      console.log(myStack.length)
    })

    it('returns null if the stack is empty', () => {
      const myStack = new Stack()
      console.log(myStack)
      expect( myStack.pop()).to.be.null
    })

  })

})
