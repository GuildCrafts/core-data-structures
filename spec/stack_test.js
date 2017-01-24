import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {

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
    it('removes an element from the top of the stack.', () => {
      const myStack = new Stack()

      myStack.push('foo')
      expect(() => myStack.pop('foo'))
        .to.alter(() => myStack.length(), { from: 1, to: 0 })
    })
  })

  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty',
    () => {
      const myStack = new Stack()
      expect( myStack.peek()).to.deep.eql(null)

      myStack.push('a')
      myStack.push('s')
      myStack.push('f')
      expect( myStack.peek()).to.eql('f')
    })
  })

  context('isEmpty()', () => {
    it('returns true is the stack is empty, false if not',
    () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.be.true

      myStack.push('a')
      expect( myStack.isEmpty()).to.be.false
    })
  })

  context('length()', () => {
    it('returns true is the stack is empty, false if not',
    () => {
      const myStack = new Stack()
      expect(myStack.length()).to.eql(0)

      myStack.push('a')
      expect( myStack.length()).to.eql(1)
    })
  })

})
