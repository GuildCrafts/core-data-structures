import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  const myStack = new Stack()

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      myStack.push('foo')
      expect(myStack.container[0]).to.equal('foo')
      myStack.push('boo')
      myStack.push('baz')
      expect(myStack.container[2]).to.equal('baz')
    })
  })

  context('pop()', () => {
    it('returns and removes the top element in the stack, returns null if the stack is empty', () => {
      expect(() => myStack.pop()).to.alter(() => myStack._size, {from:3,to:2})
      myStack.pop()
      myStack.pop()
      expect( myStack.pop()).to.equal(null)
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack, or null if the stack is empty.', () => {
      expect(myStack.peek()).to.equal(null)
      myStack.push('fee')
      myStack.push('fi')
      myStack.push('fo')
      myStack.push('fum')
      expect(myStack.peek()).to.equal('fum')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the stack is empty or false if not.', () => {
      expect(myStack.isEmpty()).to.be.false
      myStack.pop()
      myStack.pop()
      myStack.pop()
      myStack.pop()
      expect(myStack.isEmpty()).to.be.true
    })
  })

  context('length()', () => {
    it('returns the number of elements in the stack', () => {
      myStack.push('fee')
      myStack.push('fi')
      myStack.push('fo')
      myStack.push('fum')
      expect(myStack._size).to.equal(4)
    })
  })
})
