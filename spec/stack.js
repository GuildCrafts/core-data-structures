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

      expect( myStack.push('foo') )
        .to.eql( [ 'foo' ] )
    })
  })

  context('pop()', () => {
    it('pops an element off the top of the stack.', () => {
      const myStack = new Stack()
      myStack.push( 'foo' )
      expect( myStack.pop() )
        .to.eql( [] )
    })
  })

  context('length()', () => {
    it('returns number of elements in array.', () => {
      const myStack = new Stack()
      myStack.push( 'foo' )
      myStack.push( 'fooBar' )
      expect( myStack.length() )
        .to.eql( 2 )
    })
  })

  context('isEmpty()', () => {
    it('returns a boolean stating whether there are elements in the array', () => {
      const myStack = new Stack()
      expect( myStack.isEmpty() ).to.eql( false )

      myStack.push( 'foo' )

      expect( myStack.isEmpty() ).to.eql( true )
    })
  })

  context('peek()', () => {
    it('returns top element in the stack, otherwise return null', () => {
      const myStack = new Stack()
      expect( myStack.peek() ).to.eql( null )

      myStack.push( 'foo' )
      console.log(myStack.peek())
      expect( myStack.peek() ).to.eql( 'foo' )
    })
  })
})
