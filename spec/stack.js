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
        console.log('myStack', myStack);
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop())
      .to.alter(() => myStack.length(), {from: 1, to: 0})

      console.log('popp', myStack)
    })
  })

  context('peek', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.be.null
      myStack.push('foo')
      expect(myStack.peek()).to.equal('foo')
      console.log("peek", myStack)
    })
  })

  context('isEmpty', () => {
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty())
      console.log("elloo", myStack)
    })
  })
})
