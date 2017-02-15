import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from './../src/doublyLinkedList'

'use strict'

chai.use(chaiChange)

describe('DoublyLinkedList()', () => {

  context( 'insert', () => {
    const sweetList = new DoublyLinkedList()

    it( 'adds node to an empty list and sets head to that node', () => {
      sweetList.insert( 'banana phone' )
      expect( sweetList.head.element ).to.equal( 'banana phone' )
    })

    it( 'with length 1, sets the previousLink of tail to head', () => {
      sweetList.insert( 'fortunate bus driver' )
      expect( sweetList.tail.previous() ).to.equal( sweetList.head )
    })

    it( 'node added to list with multiple items has a previousLink linking to previous tail', () => {
      const oldTail = sweetList.tail
      sweetList.insert( 'unfortunate bart operator' )
      expect( sweetList.tail.previous() ).to.equal( oldTail )
    })
  })

  context( 'insertFirst', () => {
    const breathtakingList = new DoublyLinkedList()

    it( 'adds node to a list with one or more elements and sets old head\'s previous link to that node', () => {
      breathtakingList.insertFirst( 'credit card' )
      const oldHead = breathtakingList.head
      breathtakingList.insertFirst( 'finger' )
      expect( breathtakingList.head ).to.equal( oldHead.previousLink )
    })
  })

  context( 'insertBefore', () => {
    const zorpglopsList = new DoublyLinkedList()
    zorpglopsList.insert( 'floopblang' )
    zorpglopsList.insert( 'groftlop' )

    it( 'previousLink of locator will be the inserted node', () => {
      zorpglopsList.insertBefore( 'groftlop', 'blopfleep' )
      const locatorNode = zorpglopsList.find( 'groftlop' )
      const insertedNode = zorpglopsList.find( 'blopfleep' )
      expect( locatorNode.previousLink ).to.equal( insertedNode )
    })

    it( 'increases length of the list', () => {
      expect( () => zorpglopsList.insertBefore( 'blopfleep', 'blingblang' ))
        .to.alter( () => zorpglopsList.length, { from: 3, to: 4 })
    })
  })

  context( 'insertAfter', () => {
    const stupefyingList = new DoublyLinkedList()
    stupefyingList.insert( 'happiness' )
    stupefyingList.insert( 'yasss' )

    it( 'previousLink of inserted node will be the locator node',
    () => {
      stupefyingList.insertAfter( 'happiness', 'diva-station' )
      const locatorNode = stupefyingList.find( 'happiness' )
      const insertedNode = stupefyingList.find( 'diva-station' )
      expect( insertedNode.previousLink ).to.equal( locatorNode )
    })

    it( 'previousLink of locator node\'s old link will be the inserted node',
    () => {
      const locatorNodeLink = stupefyingList.find( 'diva-station' ).next()
      stupefyingList.insertAfter( 'diva-station', 'funkytown' )
      const insertedNode = stupefyingList.find( 'funkytown' )
      const oldLocatorNodeLink = stupefyingList.find( locatorNodeLink.element )
      expect( oldLocatorNodeLink.previous() ).to.equal( insertedNode )
    })
  })

  context( 'removeFirst()', () => {
    const irksomeList = new DoublyLinkedList()
    irksomeList.insert( 'trampoline' )
    irksomeList.insert( 'huge watermelon' )
    irksomeList.removeFirst()

    it( 'removes the head node from the list', () => {
      expect( irksomeList.head.previous() ).to.equal( null )
    })

  })
})
