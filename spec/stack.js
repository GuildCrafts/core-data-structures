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
    it('returns and removes the top element in the stack', () => {
      const myStack = new Stack()

      myStack.push('bar')
      myStack.push('foo')

      const foo = myStack.pop()
      expect(foo).to.eq('foo')

      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 1, to: 0 })
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack', () => {
      const myStack = new Stack()

      myStack.push('foo')
      expect(myStack.peek()).to.eq('foo')
    })

    context('with empty stack', () => {
      it('returns null', () => {
        const myStack = new Stack()

        expect(myStack.peek()).to.eq(null)
      })
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty or false if not', () => {
      const emptyStack = new Stack()
      const nonEmptyStack = new Stack()

      nonEmptyStack.push('foo')

      expect(emptyStack.isEmpty()).to.eq(true)
      expect(nonEmptyStack.isEmpty()).to.eq(false)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack', () => {
      const myStack = new Stack()

      myStack.push('bar')
      myStack.push('foo')

      expect(myStack.length()).to.eq(2)
    })
  })
})
