import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('length()', () => {
    it('returns the size of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.length()).to.eql(2)
    })
    it('returns 0 if the stack is empty', () => {
      const myStack = new Stack()
      expect(myStack.length()).to.eql(0)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.eql(true)
    })
    it('returns false if the stack is not empty', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(myStack.isEmpty()).to.eql(false)
    })
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.length()).to.deep.eql(2)
      expect(myStack.peek()).to.equal('bar')
    })
  })

  context('pop()', () => {
    it('pops the top element out of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.length()).to.eql(2)
      expect(myStack.pop()).to.eql(['bar'])
      expect(myStack.length()).to.eql(1)
    })
  })

  context('peek()', () => {
    it('peeks the top element of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.peek()).to.eql('bar')
    })
  })

})
