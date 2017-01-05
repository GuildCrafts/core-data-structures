'use strict'

import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {

  it('exists', () => {
    expect(Stack).to.be.a( 'function' )
  })

  context('stack simulator', () => {
    const awesomeStack = new Stack({ maxSize: 5 })

    it('push to the stack\'s storage adds a new element to the top', () => {
      expect(() => awesomeStack.push( 'secret' ))
        .to.alter(() => awesomeStack.length(), { from: 0, to: 1 })
    })

    it('when stack size at max, push should return overflow error', () => {
      awesomeStack.pushMany( 'secret', 'hairNet', 'angryFishPerson', 'sweater' )
      expect(awesomeStack.push( 'I will never exist' ))
        .to.equal( 'overflow error' )
    })

    it('pop removes the top most element from the stack\'s storage', () => {
      expect(() => awesomeStack.pop())
        .to.alter(() => awesomeStack.length(), { from: 5, to: 4 })
    })

    it('pop decreases the size', () => {
      expect(awesomeStack.size).to.equal( 4 )
    })

    it('pop returns the deleted item', () => {
      awesomeStack.push( 'secret' )
      expect(awesomeStack.pop()).to.equal( 'secret' )
    })

    it('popMany returns an array of deleted items', () => {
      expect(awesomeStack.popMany( 4 ))
        .to.deep.equal([ 'angryFishPerson', 'hairNet', 'secret', 'secret' ])
    })

    it('return null when pooping an empty stack', () => {
      expect(awesomeStack.pop()).to.equal( null )
    })

    it('peeking at an empty storage returns null', () => {
      expect(awesomeStack.peek()).to.equal( null )
    })

    it('peek reveals the secret located at the top of storage', () => {
      awesomeStack.pushMany( 'unripeBanana', 'tallHuman', 'secret' )
      expect(awesomeStack.peek()).to.equal( 'secret' )
    })

    it('will return true if the storage is empty', () => {
      awesomeStack.popMany( 3 )
      expect(awesomeStack.isEmpty()).to.equal( true )
    })

    it('will return false if the storage is inhabited', () => {
      awesomeStack.push( 'chocolate utopia' )
      expect(awesomeStack.isEmpty()).to.equal( false )
    })

  })
})
