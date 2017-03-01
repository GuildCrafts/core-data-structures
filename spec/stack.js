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
        .to.alter(() => myStack.top, { from: 0, to: 1 })
    })
  })

  context('pop()', () => {
    it('pops an element from the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')

      expect(() => myStack.pop())
        .to.alter(() => myStack.top, { from: 1, to: 0 })
    })
  })

  context('peek()', () => {
    it('returns the top element of the stack (without deleting it).', () => {
      const myStack = new Stack()

      expect(myStack.peek())
        .to.eql(undefined)
    })
  })

  context('isEmpty()', () => {
    it('deletes the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')

      expect(myStack.isEmpty())
        .to.eql(false)
    })
  })


  context('length()', () => {
    it('returns the length of your Stack', () => {
      const myStack = new Stack()
      myStack.push('foo2')
      myStack.push('foo')

      expect(myStack.length())
        .to.eql(2)
    })
  })

})
