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
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.isEmpty()).to.eql(false)
    })
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(myStack.length()).to.deep.eql(1)
    })
  })

  context('pop()', () => {
    it('pops the top element of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.pop()).to.eql(['bar'])
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
