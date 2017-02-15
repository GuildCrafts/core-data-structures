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
  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.',() => {
          const myStack = new Stack()

      expect(() => myStack.pop())
       .to.alter(() => myStack.length(), { form: 1, to: 0 })
    })
  })
  context('peek()',() => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
          const myStack = new Stack()

      expect(() => myStack.peek())
      .to.alter(() => myStack.length - 1, {null})
    })
  })
  context('length()',() => {
    it('returns the number of elements in the stack.', () => {
      const MyStack = new Stack()
       expect(MyStack.length()).to.equal(0);

    })
  })
})
