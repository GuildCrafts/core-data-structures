import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { LinkedList } from '../src/linked_list/'

chai.use( chaiChange )

describe( 'Linked List', () => {
  'use strict'
  let myLinkedList
  let emptyLinkedList

  it( 'exists.', () => {
    expect( LinkedList ).to.be.a( 'function' )
  })

  beforeEach( function() {
    myLinkedList = new LinkedList()
    emptyLinkedList = new LinkedList()
  })
  describe( 'insert()', () => {
    it( 'inserts a node with data to the tail of the list and increments the size.', () => {
      expect( () => myLinkedList.insert( 'apple' ) )
        .to.alter( () => myLinkedList.size(), { from: 0, to: 1 } )
        myLinkedList.insert( 'orange' )
        const node = myLinkedList.getHeadNode()
        expect( node.data() ).to.not.eql( 'orange' )
        expect( node.data() ).to.eql( 'apple' )
    })
  })

  describe( 'getHeadNode()', () => {
    it( 'returns the first node in the list.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'orange' )

      const node = myLinkedList.getHeadNode()
      expect( node.data() ).to.not.eql( 'orange' )
      expect( node.data() ).to.eql( 'apple' )
    })
    it( 'returns null if the list is empty.', () => {
      expect( emptyLinkedList.getHeadNode() ).to.be.null
    })
  })

  describe( 'getTailNode', () => {
    it( 'returns the last node in the list.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'orange' )

      const node = myLinkedList.getTailNode()
      expect( node.data() ).to.eql( 'orange' )
    })
    it( 'returns null if the list is empty.', () => {
      expect( emptyLinkedList.getTailNode() ).to.be.null
    })
  })

  describe( 'contains()', () => {
    it( 'returns true/false if the list does/doesnt contain the argument.', () => {
      myLinkedList.insert( 'apple' )

      expect( myLinkedList.contains( 'apple' ) ).to.be.true
      expect( myLinkedList.contains( 'bratwurst' ) ).to.be.false
    })
  })

  describe( 'find()', () => {
    it( 'returns the first node to contain the provided data.', () => {
      myLinkedList.insert( 'orange' )

      const node = myLinkedList.find( 'orange' )
      expect( node.data() ).to.be.eql( 'orange' )
      expect( myLinkedList.find( 'oreos' ) ).to.eql( -1 )
    })
  })

  describe( 'insertFirst()', () => {
    it( 'inserts a node with data to the begining of the list.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'orange' )

      expect( () => myLinkedList.insertFirst( 'cheesecake' ) )
        .to.alter( () => myLinkedList.size(), { from: 2, to: 3 } )
      const node = myLinkedList.getHeadNode()
      expect( node.data() ).to.eql( 'cheesecake' )
    })
  })

  describe( 'insertBefore()', () => {
    it( 'inserts a new node with data before the provided node.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'orange' )

      expect( () => myLinkedList.insertBefore( 'orange', 'banana' )  )
        .to.alter( () => myLinkedList.size(), { from: 2, to: 3 } )
      let node = myLinkedList.find( 'banana' )
      expect( node.next().data() ).to.eql( 'orange' )
      node = myLinkedList.find( 'apple' )
      expect(  )
      expect( () => myLinkedList.insertBefore( 'mango', 'sea urchin' ) )
        .to.throw.error
    })
  })

  describe( 'insertAfter()', () => {
    it( 'inserts a node with data after the node with the provided data.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'orange' )
      myLinkedList.insertBefore( 'orange', 'banana' )

      expect( () => myLinkedList.insertAfter( 'banana', 'cookie' ) )
        .to.alter( () => myLinkedList.size(), { from: 3, to: 4 } )
      let node = myLinkedList.find( 'banana' )
      expect( node.next().data() ).to.eql( 'cookie' )
      node = myLinkedList.find( 'cookie' )
      expect( node.next().data() ).to.eql( 'orange' )
      expect( () => myLinkedList.insertAfter( 'mango', 'sea urchin' ) )
        .to.throw.error
    })
  })

  describe( 'remove()', () => {
    it( 'removes the tail node from the list.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'banana' )
      myLinkedList.insert( 'cookie' )
      myLinkedList.insert( 'orange' )

      expect( () => myLinkedList.remove() )
        .to.alter( () => myLinkedList.size(), { from: 4, to: 3 } )
      let node = myLinkedList.find( 'cookie' )
      expect( node.next() ).to.be.null
    })
  })

  describe( 'removeFirst()', () => {
    it( 'removes the node at the head of the list.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'banana' )
      myLinkedList.insert( 'cookie' )
      expect( () => myLinkedList.removeFirst() )
        .to.alter( () => myLinkedList.size(), { from: 3, to: 2 } )
      let node = myLinkedList.getHeadNode()
      expect( node.data() ).to.eql( 'banana' )
    })
  })

  describe( 'isEmpty()', () => {
    it( 'returns true if the list is empty.', () => {
      expect( emptyLinkedList.isEmpty() ).to.be.true
    })
  })

  describe( 'size()', () => {
    it( 'returns the amount of nodes in the list.', () => {
      expect( () => myLinkedList.insert( 'foo' ) )
        .to.alter( () => myLinkedList.size(), { from: 0, to: 1 } )
    })
  })

  describe( 'clear()', () => {
    it( 'removes all nodes from the list.', () => {
      myLinkedList.insert( 'apple' )
      myLinkedList.insert( 'banana' )
      myLinkedList.insert( 'cookie' )
      expect( () => myLinkedList.clear() )
        .to.alter( () => myLinkedList.size(), { from: 3, to: 0 } )
    })
  })
})
