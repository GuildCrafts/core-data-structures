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

    it('returns null if stack is empty.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop().to.equal(null))
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack', () => {
      const myStack = new Stack()

      expect(myStack.peek()).to.equal(null)
    })

    it('returns the top value of the stack.', () => {
      const myStack = new Stack()

      myStack.push('foo')
      myStack.push('bar')

      expect(() => myStack.peek().to.equal('bar'))
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty.', () => {
      const myStack = new Stack()

      expect(() => myStack.isEmpty().to.equal(true))
    })
    it('returns false if the stack is not empty.', () => {
      const myStack = new Stack()
      myStack.push('foo')

      expect(() => myStack.isEmpty().to.equal(false))
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      myStack.push('baz')

      expect(() => myStack.length().to.equal(3))
    })

    it('returns zero if there are not elements in the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.length().to.equal(0))
    })
  })
})
