import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack2'

chai.use(chaiChange)

describe('Stack2', function() {
  'use strict'

  it('is a function', function() {
    expect(Stack).to.be.a('function')
  })

  context('empty stack', function() {
    const emptyStack = new Stack()
    it('pop() returns null', function() {
      expect(emptyStack.pop()).to.be.null
    })
    it('peek() returns null', function() {
      expect(emptyStack.peek()).to.be.null
    })
    it('isEmpty() returns true', function() {
      expect(emptyStack.isEmpty()).to.be.true
    })
    it('length() returns 0', function() {
      expect(emptyStack.length()).to.be.equal(0)
    })
  })

  context('non-empty stack', function() {
    const sStack = new Stack()
    sStack.push('bad')
    sStack.push('ok')
    sStack.push('good')
    it('the element pop() returns is “good”', function() {
      expect(sStack.pop().getData()).to.be.equal('good')
    })
    it('the length is 2 after 1 pop', function() {
      expect(sStack.length()).to.be.equal(2)
    })
    it('the element peek() returns after a pop is “ok”', function() {
      expect(sStack.peek().getData()).to.be.equal('ok')
    })
    it('isEmpty() returns false', function() {
      expect(sStack.isEmpty()).to.be.false
    })
    it('length() after a pop returns 2', function() {
      expect(sStack.length()).to.be.equal(2)
    })
    it('the length is 3 after a valid push', function() {
      sStack.push('good')
      expect(sStack.length()).to.be.equal(3)
    })
    it('the length stays 3 after an invalid push', function() {
      sStack.push()
      expect(sStack.length()).to.be.equal(3)
    })
  })

})
