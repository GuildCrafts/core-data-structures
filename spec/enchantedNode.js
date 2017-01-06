import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import EnchantedNode from './../src/enchantedNode'

'use strict'

chai.use(chaiChange)

describe('EnchantedNode()', () => {

  const enrapturedNode = new EnchantedNode( 'thingOne' )
  enrapturedNode.link = 'link'
  enrapturedNode.previousLink = 'previous link'

  it('exists', () => {
    expect( EnchantedNode ).to.be.a( 'function' )
  })

  it('has a link', () => {
    expect( enrapturedNode.next() ).to.equal( 'link' )
  })

  it('has a previous link', () => {
    expect( enrapturedNode.previous() ).to.equal( 'previous link' )
  })

  it('has an element', () => {
    expect( enrapturedNode.data() ).to.equal( 'thingOne' )
  })

})
