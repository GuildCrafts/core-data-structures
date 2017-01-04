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
    it('pushes an element to the top of the stack.', () => {
      const aStack = new Stack()

      aStack.push('bar')
      aStack.push('foo')

      expect(() => aStack[0]
        .to.equal('foo'))
    })

  })

  context('pop()', () => {
    it('removes an element from the top of the stack.', () => {
      const aStack = new Stack(['foo','bar'])
      expect(() => aStack.pop())
        .to.alter(() => aStack.length(), { from: 2, to: 1 })
    })
  })

  context('peek()', () => {
    it('shows the current element at the top of the stack.', () => {
      const aStack = new Stack(['foo','bar'])
      expect(aStack.peek())
        .to.equal('foo')
    })
  })

  context ('isEmpty()', () => {
    it('shows the current stack is empty.', () => {
      const aStack = new Stack()
      expect(aStack.isEmpty())
        .to.equal(true)
    })
    it('returns false if the current stack is occupied.', () => {
      const aStack = new Stack()
      aStack.push('fewh')
      expect(aStack.isEmpty())
        .to.equal(false)
    })
  })


  context ('length()', () => {
    it('shows the length of the stack.', () => {

    })
  })
})
