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
      const myStack = new Stack()
      myStack.push('indica')
      myStack.push('sativa')
      myStack.push('alcohol')
      myStack.pop()

      it('removes the top element from stack', () =>{

        expect(myStack.size).to.equal(2)
      })
    })

      context('peek()', () => {
        const myStack = new Stack()
        myStack.push('indica')
        myStack.push('sativa')
        myStack.peek()

        it('pushes an element', () => {

          expect(myStack.top.data).to.equal('sativa')
        })
      })

        context('isEmpty', () => {
          const myStack = new Stack()

          it('Returns true if stack is empty', () => {

            expect(myStack.isEmpty()).to.equal(true)
          })
        })

        context('length()', () => {
          const myStack = new Stack()
          myStack.push('indica')
          myStack.push('sativa')
          myStack.length()

          it('Returns the number of nodes/size of stack', () => {

            expect(myStack.length()).to.equal(2)
          })
        })

})
