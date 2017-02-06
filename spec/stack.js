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
    it('returns zero elements when the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.length()).to.be.equal(0)
    })

    it('returns the number of elements in the stack', () => {
      const myStack = new Stack()
      myStack.collector[0] = 1
      expect(myStack.length()).to.be.equal(1)
    })
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })
})
