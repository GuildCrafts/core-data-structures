import chai, { expect, assert } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'
  let myStack
  beforeEach( () => {
    myStack = new Stack()
  })

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('#push()', () => {
    it('pushes an element to the top of the stack.', () => {
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
    it('changes the top element to the value pushed', () => {
      expect(() => myStack.push('bar')).to.alter(() => myStack.peek(), { from: null, to: 'bar' })
    })
  })

  context('#pop()', () => {
    it('should pop the top element off the stack', () => {
      myStack.push(99)
      myStack.push(98)
      expect(myStack.pop()).to.eql(98)
      expect(() => myStack.pop()).to.alter(() => myStack.length(), { from: 1, to: 0 })
    })
    it('should return null if stack is empty', () => {
      expect(myStack.pop()).to.eql(null)
    })
    it('deletes the item off the top of the stack', () => {
      myStack.push(99)
      myStack.push(98)
      expect(() => myStack.pop()).to.alter(() => myStack.peek(), { from: 98, to: 99 })
    })
  })
  context('#peek()', () => {
    it('should return the top element of the stack without popping it off', () => {
      myStack.push(99)
      assert.unaltered(() => myStack.peek(), () => myStack.length())
    })
    it('should return null if stack is empty', () => {
      myStack.push(99)
      myStack.pop()
      expect(myStack.peek()).to.eql(null)
    })
  })
  context('#isEmpty()', () => {
    it('should return true if Stack instance is empty', () => {
      expect(myStack.isEmpty()).to.eql(true)
    })
    it('should return false if Stack instance is not empty', () => {
      myStack.push(99)
      expect(myStack.isEmpty()).to.eql(false)
    })
  })
  context('#length()', () => {
    it('should return length of Stack instance', () => {
      myStack.push(99)
      expect(myStack.length()).to.eql(1)
      expect(() => myStack.push(98)).to.alter(() => myStack.length(), { from: 1, to: 2 })
    })
    it('should return 0 if stack is empty', () => {
      expect(myStack.length()).to.eql(0)
    })
  })
})
