import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })

  context('length()', () => {
    it('returns zero elements when the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.length()).to.be.equal(0)
    })

    it('returns the number of elements in the stack', () => {
      const myStack = new Stack()
      myStack.collector[0] = 1
      expect(myStack.length()).to.be.equal(1)
    })
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })

    it('pushes two elements to the tail of the stack.', () => {
      const myStack = new Stack()
      expect(() => {
        myStack.push(['soccer', 'baseball'])
        myStack.push(['bar','foo'])
      })
        .to.alter(() => myStack.length(), { from: 0, to: 2 } )
    })
  })

  context('pop()', () => {
    it('returns null if the stack is empty', () =>{
      const myStack = new Stack()
      expect(myStack.pop()).to.be.equal(null)
    })

    it('removes the top element in the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => myStack.pop())
        .to.alter(() => myStack.length(), { from: 1, to: 0 } )
    })

    it('returns the value of the removed element', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(myStack.pop()).to.be.equal('foo')
    })
  })

  context('peek', () => {
    it('returns null if the stack is empty', () => {
      const myStack = new Stack()
      expect(myStack.peek()).to.be.equal(null)
    })

    it('returns the top element in the stack', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(() => {
        myStack.peek().to.be.equal('foo')
      })
    })
  })

  context('isEmpty', () => {
    it('returns true if the stack is empty', () => {
      const myStack = new Stack()
      expect( myStack.isEmpty()).to.be.equal(true)
    })

    it('returns false if the stack is not empty', () => {
      const myStack = new Stack()
      myStack.push('foo')
      expect(myStack.isEmpty()).to.be.equal(false)
    })
  })

})
