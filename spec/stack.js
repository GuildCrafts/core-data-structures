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

      expect(() => myStack.add('foo'))
        .to.alter(() => myStack.size(), { from: 0, to: 1 })
    })
  })


  context('remove()', () => {
    it('removes an element from the top of the stack.', () => {
      const myStack = new Stack()
      myStack.add('foo')
      expect(() => myStack.remove())
        .to.alter(() => myStack.size(), { from: 1, to: 0 })
    })
  })

  context('peek()', () => {
    it('returns the top element of the stack.', () => {
      const myStack = new Stack()
      myStack.add('foo')
      myStack.add('dude')
      myStack.add('adam')
      expect(() => myStack.peek().to.be.equal('adam'))
    })
  })
})
