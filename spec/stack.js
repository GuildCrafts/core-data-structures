import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  describe('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.elements.length, { from: 0, to: 1 })
        expect(() => myStack.push('bar'))
          .to.alter(() => myStack.elements.length, { from: 1, to: 2 })
          expect(() => myStack.push('boom'))
            .to.alter(() => myStack.elements.length, { from: 2, to: 3 })
    })
  })
  describe('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()

      myStack.push('cereal')
      myStack.push('almond milk')
      myStack.push('bananas')
      // console.log(myStack)
      // console.log(myStack.pop())
      // console.log(myStack)

      expect(() => myStack.pop())
        .to.alter(() => myStack.elements.length, { from: 3, to: 2 })

    })
    it('it does not return undefined', () => {
      const myStack = new Stack()

      myStack.push('cereal')
      myStack.push('almond milk')
      myStack.push('bananas')
      // console.log(myStack)
      // console.log(myStack.pop())
      // console.log(myStack)

      expect(() => myStack.pop())
        .to.not.be.undefined
  })
    it('returns the last value of the stack and null if stack is empty ', () => {
      const myStack = new Stack()

      myStack.push('cereal')
      myStack.push('almond milk')
      myStack.push('bananas')
      // console.log(myStack)
      // console.log(myStack.pop())
      // console.log(myStack)

      expect(myStack.pop())
        .to.eql(['bananas'])
        expect(myStack.pop())
          .to.eql(['almond milk'])
          expect(myStack.pop())
            .to.eql(['cereal'])
            expect(myStack.pop())
              .to.be.null
  })
 })
 describe('peek()', () => {
   it('should return the last element in the stack or null if the stack is empty.', () => {
     const myStack = new Stack()
     const emptyStack = new Stack()

     myStack.push('cereal')
     myStack.push('almond milk')
     myStack.push('bananas')
     // console.log(myStack)
     // console.log(myStack.pop())
     // console.log(myStack)

     expect(myStack.peek())
       .to.eql(['bananas'])
       expect(emptyStack.peek())
         .to.be.null
   })
 })
 describe('peek()', () => {
   it('returns true if the stack is empty or false if not.', () => {
     const myStack = new Stack()
     const emptyStack = new Stack()

     myStack.push('cereal')
     myStack.push('almond milk')
     myStack.push('bananas')
     // console.log(myStack)
    //  console.log(emptyStack)
     // console.log(myStack)

     expect(myStack.isEmpty())
       .to.be.false
       expect(emptyStack.isEmpty())
         .to.be.true
    })
  })
})
