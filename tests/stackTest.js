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
    })
  })

  context('pop()', () => {
    it('pops an element off the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('lemons')
      myStack.push('crabs')
      myStack.push(5)
      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 4, to: 3 })
      let thing = myStack.pop()
      expect(thing).to.equal('crabs')
    })
  })

  context('peek()', () => {
    it('peeks at the top element of the stack.', () => {
      const myStack = new Stack()
      myStack.push('foo')
      myStack.push('lemons')
      myStack.push('crabs')
      myStack.push('im the top')
      console.log(myStack);
      let top = myStack.peek()
      expect(top).to.equal('im the top')
    })
  })

  context('isEmpty()', () => {
    it('checks to see if stack is empty', () => {
      const myStack = new Stack()
      let emptyStack = myStack.isEmpty()
      expect(emptyStack).to.deep.equal(true)
      myStack.push('lemons')
      let notEmptyStack = myStack.isEmpty()
      expect(notEmptyStack).to.eql(false)
    })
  })


})
