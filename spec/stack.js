import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })

  context('pop()', () => {
    it('returns and removes the top element in the stack', () => {
      const myStack = new Stack()
      myStack.push('cookie')
      myStack.push('ice cream')
      expect(() => myStack.pop())
      .to.alter(() => myStack.length(), { from: 2, to: 1 })
      })
    })

  context('peek()', () => {
      it('shows top element in the stack', () => {
      const myStack = new Stack()
      myStack.push('potato')
      myStack.push('sock')
      expect(myStack.peek()).to.eql('potato')
      })
    })

  context('isEmpty()', () => {
    it('returns true if stack is empty or false if not.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.equal(true)
      })
    })

  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      myStack.push('dog')
      myStack.push('chicken')
    expect(myStack.length())
      .to.equal(2)
      })
    })
  })
})
