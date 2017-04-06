import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('is a function', () => {
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
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      myStack.push('One')
      expect(() => myStack.pop()).to.alter(() => myStack.length(), { from: 1, to: 0 })
    })

    it('returns null if the stack is empty', () => {
      const myStack = new Stack()
      expect( myStack.pop()).to.be.null
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack.', ()=>{
      const myStack = new Stack()
      myStack.push('Car')
      expect(myStack.peek()).to.equal('Car')
    })

    it('returns null if the stack is empty', () => {
      const myStack = new Stack()
      expect( myStack.pop()).to.be.null
    })
  })

  context('isEmpty()', () => {
    it('returns true when stack is empty.', () => {
      const myStack = new Stack()
      expect( myStack.isEmpty()).to.true
    })

    it('returns false when stack is loaded.', () => {
      const myStack = new Stack()
      myStack.push('Car')
      myStack.push('Fixie')
      expect( myStack.isEmpty()).to.false
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {

      const myStack = new Stack()

      myStack.push('Car')
      myStack.push('Fixie')
      myStack.push('MacBook')

      expect(myStack.length() ).to.equal(3)
    })
  })

})
