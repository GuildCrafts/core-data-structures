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
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })

    it('pushes an element to the top of the stack when there is preexisting data', () => {
      const stack = new Stack()
      stack.push('alice')
      stack.push('bob')

      expect(() => stack.push('foo'))
        .to.alter(() => stack.peek(), {from: 'bob', to: 'foo'})
    })

  })
  context('pop()', () => {
    it('pushes an element to the top of the stack.', () => {
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })
  })
  context('peek()', () => {
    it('pushes an element to the top of the stack.', () => {
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })
  })
  context('isEmpty()', () => {
    it('pushes an element to the top of the stack.', () => {
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })
  })
  context('length()', () => {
    it('pushes an element to the top of the stack.', () => {
      const stack = new Stack()

      expect(() => stack.push('foo'))
        .to.alter(() => stack.length(), { from: 0, to: 1 })
    })
  })
})
