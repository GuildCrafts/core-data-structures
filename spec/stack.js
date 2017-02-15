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
      expect(() => myStack.push('yass'))
        .to.alter(() => myStack.length(), { from: 1, to: 2 })
      expect(() => myStack.push('hello'))
        .to.alter(() => myStack.length(), { from: 2, to: 3 })
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
      expect(() => myStack.push('yas'))
        .to.alter(() => myStack.length(), { from: 1, to: 2 })
      expect(() => myStack.pop('hello'))
        .to.alter(() => myStack.length(), { from: 2, to: 1 })
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
      expect(() => myStack.push('tee'))
        .to.alter(() => myStack.length(), { from: 1, to: 2 })
      expect( myStack.peek() ).to.equal('tee')
    })

    it( 'returns null if the stack is empty', () => {
      const myStack = new Stack()
      expect( myStack.peek() ).to.be.null
    })
  })

  context( 'isEmpty()', () => {
    it( 'returns true if the stack is empty', () => {
      const myStack = new Stack()
      expect( myStack.isEmpty() ).to.be.true
    })

    it( 'returns false if the stack is empty', () => {
      const myStack = new Stack()
      myStack.push( 'tee' )
      expect( myStack.isEmpty() ).to.be.false
    })
  })

  context( 'length()', () => {
    it( 'returns the number of elements in the stack', () => {
      const myStack = new Stack()
      myStack.push( 'yaseen' )
      myStack.push( 'izzy' )
      myStack.push( 'nadir' )
      expect( myStack.length() ).to.eql(3)
    })
  })

})
