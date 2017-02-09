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
    context('when the stack is not empty', () => {
      it('removes the top element in a stack', () => {
        const myStack = new Stack()

        myStack.push('popcorn')
        expect(() => myStack.pop())
          .to.alter(() => myStack.length(), { from: 1, to: 0 })
      })
      it('returns the top element in a stack', () => {
        const myStack = new Stack()

        myStack.push('popcorn')
        expect(myStack.pop())
          .to.equal('popcorn')
      })
    })
    context('when the stack is empty', () => {
      it('returns null', () => {
        const myStack = new Stack()

        expect(myStack.pop())
          .to.equal(null)
      })
    })
  })

  context('peek()', () => {
    context('when the stack is not empty', () => {
      it('returns the top element in the stack', () => {
        const myStack = new Stack()

        myStack.push('food')
        expect( myStack.peek() ).to.equal('food')
      })
    })

    context('when the stack is empty', () => {
      it('returns null', () => {
        const myStack = new Stack()

        expect( myStack.peek() ).to.equal(null)
      })
    })
  })


  context('isEmpty()', () => {
    context('when the stack is not empty', () => {
      it('returns false', () => {
        const myStack = new Stack()

        myStack.push('food')
        expect(myStack.isEmpty() ).to.equal(false)
      })
    })
    context('when the stack is empty', () => {
      it('returns true', () => {
        const myStack = new Stack()

        expect(myStack.isEmpty() ).to.equal(true)
      })
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack', () => {
      const myStack = new Stack()

      expect(myStack.length()).to.equal(0)
    })
  })
})
