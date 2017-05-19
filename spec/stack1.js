import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack1'
import Node from '../src/node1'

chai.use(chaiChange)

describe('Stack1', () => {
  'use strict'
  const stack = new Stack()

  it('exists', () => {
    expect(Stack).to.be.a( 'function' )
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
        const myStack = new Stack()
        expect(() => myStack.push( 'foo' ))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
      it( 'returns and removes the top element of the stack or null if empty', () => {
        const newStack = new Stack()
        newStack.push( 'block' )
        expect( newStack.pop() ).to.equal( 'block' )
      })
  })

  context('peek()', () => {
      it( 'returns the top element of the stack', () => {
        const newStack = new Stack()
        newStack.push('block1')
        newStack.push('block2')
        newStack.push('block3')
        expect( newStack.peek() ).to.equal('block3')
      })
  })

  context('length()', () => {
      it('returns the number of items in the stack', () => {
        const newStack = new Stack()
        newStack.push('block2')
        newStack.push('block3')
        expect( newStack.length() ).to.equal(2)
      })
  })

  context('isEmpty()', () => {
      it('returns true is the stack is empty or false if not', () => {
        const newStack = new Stack()
        expect( newStack.isEmpty() ).to.equal(true)
      })
  })

})
