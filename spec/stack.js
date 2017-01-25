import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)
let myStack

describe('Stack', () => {
  'use strict'

  beforeEach(() => {
    myStack = new Stack()
  })

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push', () => {
    it('pushes an element to the top of the stack.', () => {

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop', () => {
    it('returns null if the stack is empty', () => {
      expect(myStack.pop()).to.eql(null)
    })
    it('returns and removes the top element in the stack', () => {
      myStack.push(1)
      myStack.push(2)
      myStack.push(3)
      expect(myStack.pop()).to.eql(3)
      expect(myStack.stack).to.eql([1, 2])
    })
  })

  context('peek', () => {
    it('returns null if the stack is empty', () => {
      expect(myStack.peek()).to.eql(null)
    })
    it('returns the top element in the stack', () => {
      myStack.push(1)
      myStack.push(2)
      myStack.push(3)
      expect(myStack.peek()).to.eql(3)
      expect(myStack.stack).to.eql([1, 2, 3])
    })
  })

  context('isEmpty', () => {
    it('returns true if the stack is empty', () => {
      expect(myStack.isEmpty()).to.eql(true)
    })
    it('returns false if the stack is not empty', () => {
      myStack.push(1)
      expect(myStack.isEmpty()).to.eql(false)
    })
  })

  context('length', () => {
    it('returns the number of elements in the stack', () => {
      expect(myStack.length()).to.eql(0)
      myStack.push(1)
      myStack.push(2)
      expect(myStack.length()).to.eql(2)
    })
  })
  
})
