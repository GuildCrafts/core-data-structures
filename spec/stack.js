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
      expect(() => myStack.push('goo'))
      .to.alter(() => myStack.length(), {from:1, to: 2 })
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

  describe('peek', () => {
    it('returns the top element in the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(myStack.peek()).to.equal('foo')
    })
    it('null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.be.null
    })
  })

  describe('isEmpty', () => {
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.be.true
      console.log("elloo", myStack)
    })
  })
})
