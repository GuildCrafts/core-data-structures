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
      const awesomeStack = new Stack()

      expect(() => awesomeStack.push('foo'))
        .to.alter(() => awesomeStack.length(), { from: 0, to: 1 })
    })
  })
})
