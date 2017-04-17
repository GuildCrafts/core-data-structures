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
    it('Returns the size of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.length()).to.eql(2)
    })
    it('Returns 0 if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.length()).to.eql(0)
    })
  })

  context('isEmpty()', () => {
    it('Returns true if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.eql(true)
    })
    it('Returns false if the stack is not empty.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(myStack.isEmpty()).to.eql(false)
    })
  })

  context('push()', () => {
    it('Pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.peek()).to.equal('bar')
    })
    it('Increases the Stack size by 1 with each push.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.length()).to.deep.eql(2)
    })
  })

  context('pop()', () => {
    it('Pops the top element out of the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.pop()).to.eql(['bar'])
    })
    it('Decreases the Stack size by 1 with each pop()', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('bar')
      expect(myStack.length()).to.eql(2)
      myStack.pop()
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
    it('Returns null if the Stack is empty', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.eql(null)
    })
  })
    
})
