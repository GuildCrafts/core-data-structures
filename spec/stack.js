import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe.only('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })

      expect(() => myStack.push('boo'))
        .to.alter(() => myStack.length(), { from: 1, to: 2})

      expect(() => myStack.push('moo'))
        .to.alter(() => myStack.length(), { from: 2, to: 3 })

    })
  })

  context('pop()', () => {
    it('removes an element from the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('boo')
      expect(() => myStack.pop().to.equal('boo'));
    })
  })

  context('peek()', () => {
    it('returns the element at the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('boo')
      expect(() => myStack.peek().to.equal('boo'));
    })
  })

  context('length()', () => {
    it('returns the length of the array.',() => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.length(), { from: 0, to: 1})
    })
  })

 context('clear()', () => {
   it('returns an empty array.', () => {
   const myStack = new Stack()
   myStack.push('foo')
    expect (() => myStack.length(), {from: 1, to: 0})
  })
 })
})
