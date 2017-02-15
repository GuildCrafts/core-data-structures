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

  describe('pop()', () => {
    it('returns and removes the top element in the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop())
      .to.alter(() => myStack.length(), {from: 1, to: 0})
    })
    it('returns null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.pop()).to.be.null
    })

    it('removes the top element in the stack', () => {
      const myStack = new Stack()
      myStack.push('boo')
      myStack.push('goo')
      myStack.push('who')
      myStack.pop()
      expect(myStack.storage).to.deep.equal(['boo', 'goo'])
    })
  })

  context('peek', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.be.null
      myStack.push('foo')
      expect(myStack.peek()).to.equal('foo')
    })
  })

  context('isEmpty', () => {
    it('returns true if the stack is empty or false if not.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.be.true
    })
  })
})
