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
    it('increases the length of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
    it('changes the top element to the value pushed.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('bar'))
        .to.alter(() => myStack.peek(), { from: null, to: 'bar' })
    })
  })
  context('pop()', () => {
    it('returns the item at the top of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect( myStack.pop() ).to.eql('foo')

    })
    it('returns null if called on an empty stack', () => {
      const myStack = new Stack()
      expect( myStack.pop() ).to.be.null
    })
    it('if called on a stack with length=1, length becomes 0', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 1, to: 0 })
    })
    it('strange case array delete', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      myStack.push('pow')
      expect(myStack.length()).to.eql(3)
      myStack.pop()
      expect(myStack.length()).to.eql(2)
      myStack.push('ping')
      expect(myStack.length()).to.eql(3)
      expect(myStack.peek()).to.eql('ping')
    })
    it('deletes the item at the top of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      myStack.pop()
      expect(myStack.peek()).to.eql('foo')
    })
  })
  context('peek()', () => {
    it('returns the item at the top of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect( myStack.peek() ).to.eql('bar')
    })
    it('returns null if called on an empty stack', () => {
      const myStack = new Stack()
      expect( myStack.peek() ).to.be.null
    })
  })
  context('isEmpty()', () => {
    it('returns true if the stack is empty, or false if not', () => {
      const myStack = new Stack()
      expect( myStack.isEmpty() ).to.be.true
      myStack.push('foo')
      expect( myStack.isEmpty() ).to.be.false
    })
  })
})
