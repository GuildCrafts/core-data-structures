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

      const stackOfMoney = new Stack()

      expect(() => { stackOfMoney.push('foo')})
        .to.alter( () => {
          return stackOfMoney.lengthVal
        }, { from: 0, to: 1 })
      expect(stackOfMoney.head).to.have.deep.property('element', 'foo')
    })
  })

  context('pop()', () => {
    const stackOfMoney = new Stack()

    it('takes off the top element from the stack reducing length.', () => {

      stackOfMoney.push('tacos')

      expect(() => {
        stackOfMoney.pop()
      })
        .to.alter( () => {
          return stackOfMoney.lengthVal
        }, { from: 1, to: 0 })
    }),

    it('returns the top most object\'s content', () => {

      stackOfMoney.push('tacos')

      expect(stackOfMoney.pop()).to.equal( 'tacos' )
    })
  })

  context('length()', () => {
    const stackOfMoney = new Stack()

    it('returns the number of elements in the stack.', () => {

      stackOfMoney.push('tacos')
      stackOfMoney.push('shishkabobs')

      expect(stackOfMoney.length()).to.equal( 2 )
    })
  })

  context('peek()', () => {
    const stackOfMoney = new Stack()

    it('returns null if the stack is empty.', () => {

      expect(stackOfMoney.peek()).to.equal( null )
    }),

    it('returns the top element if not null.', () => {
      stackOfMoney.push('dollar')

      expect(stackOfMoney.peek()).to.equal( 'dollar' )
    })
  })

  context('isEmpty()', () => {
    const stackOfMoney = new Stack()

    it('returns true if the stack is empty.', () => {
      expect(stackOfMoney.isEmpty()).to.equal( true )
    }),

    it('returns false if the stack is not empty.', () => {
      stackOfMoney.push('dollar')

      expect(stackOfMoney.isEmpty()).to.equal( false )
    })
  })
})
