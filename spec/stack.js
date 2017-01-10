import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', function() {
  'use strict'

  it('exists', function() {
    expect(Stack).to.be.a('function')
  })

  context('push()', function() {
    it('pushes an element to the top of the stack.', function() {

      const stackOfMoney = new Stack

      expect(function(){ stackOfMoney.push('foo')})
        .to.alter( this.stackOfMoney.length, { from: 0, to: 1 })
    })

  })
})
