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
    it('returns the element from the top of the stack', () => {
      const popStack = new Stack()
      popStack.push('boo')
      popStack.push('hoo')
      console.log(popStack.pop());
      expect(popStack.pop()).to.equal('hoo')
      expect(() => popStack.pop().to.alter( () => popStack.length(), { from: 2, to: 1 }) )
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const peekStack = new Stack()
      peekStack.push('element')
      expect(peekStack.peek()).to.equal('element')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty or false if not.', () => {
      const emptyStack = new Stack()
      expect(emptyStack.isEmpty()).to.equal(true)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const lengthStack = new Stack()
      expect(lengthStack.length()).to.equal(0)
    })
  })

})
