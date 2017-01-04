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
      const aStack = new Stack()

      expect(() => aStack.push('foo'))
        .to.alter(() => aStack.length(), { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('removes an element from the top of the stack.', () => {
      const aStack = new Stack( 1 )
      expect(() => aStack.pop())
        .to.alter(() => aStack.length(), { from: 1, to: 0 })
    })
  })
  //
  // stack.peek()      // returns the top element in the stack or null if the stack is empty.
  //
  // stack.isEmpty()   // returns true if the stack is empty or false if not.
  //
  // stack.length()    // returns the number of elements in the stack.}
})
