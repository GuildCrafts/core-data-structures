import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use( chaiChange )

describe( 'Stack', () => {
  'use strict'
  const myStack = new Stack()

  it( 'exists', () => {
    expect( Stack ).to.be.a('function')
  })

  context( 'push()', () => {
    it( 'pushes an element to the top of the stack.', () => {
      expect( () => myStack.push( 'foo' ) )
        .to.alter( () => myStack.length(), { from: 0, to: 1 })
    })

    it( 'Changes the length of the stack by one after inserting item.', () => {
      expect( () => myStack.push( 'bar' ) )
        .to.alter( () => myStack.length(), { to: 2 })
    })
  })

  context( 'pop()', () => {
    it( 'Pops off the item most recently added to the stack.', () => {
      expect( myStack.pop() ).to.eql( 'bar' )
    })

    it( 'Decerements the length of the stack by 1.', () => {
      expect( () => myStack.pop() )
        .to.alter( () => myStack.length(), { from: 1, to: 0 } )
    })

    it( 'Returns null if the stack is empty.', () => {
      expect( myStack.pop() ).to.eql( null )
    })

  })

  context( 'peek()', () => {
    it( 'Shows the most recently added item in the stack.', () => {
      const aStack = new Stack()
      aStack.push( 'bar' )
      expect( aStack.peek() ).to.eql( 'bar' )
    })

    it( 'Returns null if the stack is empty.', () => {
      expect( myStack.peek() ).to.eql( null )
    })
  })

  context( 'isEmpty()', () => {
    it( 'Returns true if there are no items in the stack.', () => {
      expect( myStack.isEmpty() ).to.eql( true )
    })

    it( 'Returns false if the stack contains any items.', () => {
      myStack.push( 'stuff' )
      expect( myStack.isEmpty() ).to.eql( false )
    })
  })

  context( '.length', () => {
    it( 'Returns the number of items contained within the stack.', () => {
      expect( myStack.length() ).to.eql( 1 )
    })
  })


})
