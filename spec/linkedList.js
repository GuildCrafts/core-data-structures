import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect( LinkedList ).to.be.a( 'function' )
  })

  context( 'insert()', () => {
    const linkedListOne = new LinkedList()

    it( 'an empty list has no tail', () => {
      expect( linkedListOne.tail ).to.equal( null )
    })

    it( 'adds node to an empty list and sets head to that node', () => {
      linkedListOne.insert( 1 )
      expect( linkedListOne.head.element ).to.equal( 1 )
    })

    it( 'adds node to list with one element and sets head to that node', () => {
      linkedListOne.insert( 2 )
      expect( linkedListOne.head.element ).to.equal( 1 )
    })

    it( 'the link of added item is set', () => {
        expect( linkedListOne.head.link ).to.equal( linkedListOne.tail )
    })

    it( 'adds node to list with one element and sets tail to that node', () => {
      expect( linkedListOne.tail.element ).to.equal( 2 )
    })

    it( 'adds node to list with multiple elements and sets tail to that node', () => {
      linkedListOne.insert( 3 )
      expect( linkedListOne.tail.element ).to.equal( 3 )
    })

    it( 'increases the size of the list', () => {
      expect( () => linkedListOne.insert( 4 ) )
        .to.alter( () => linkedListOne.length, { from: 3, to: 4 } )
    })

  })

  context( 'insertFist()', () => {
    const linkedListOne = new LinkedList()

    it( 'in an empty list the head and the tail are the same', () => {
      expect( linkedListOne.tail ).to.equal( linkedListOne.head )
    })

    it( 'adds node to list with no elements and sets head to that node', () => {
      linkedListOne.insertFirst( 1 )
      expect( linkedListOne.head.element ).to.equal( 1 )
    })

    it( 'adds node to a list with one element and sets head to that node', () => {
      linkedListOne.insertFirst( 2 )
      expect( linkedListOne.head.element ).to.equal( 2 )
    })

    it( 'the link of added item is set', () => {
      expect( linkedListOne.head.link ).to.equal( linkedListOne.tail )
    })

    it( 'adding node to list with multiple elements and sets head to that node', () => {
      linkedListOne.insertFirst( 3 )
      expect( linkedListOne.head.element ).to.equal( 3 )
    })
  })

  context( 'getHeadNode()', () => {
    const linkedListOne = new LinkedList()

    it( 'in an empty list return null', () => {
      expect( linkedListOne.getHeadNode() ).to.equal( null )
    })

    it( 'returns the head of the list', () => {
      linkedListOne.insertFirst( 1 )
      linkedListOne.insertFirst( 2 )
      expect( linkedListOne.getHeadNode().element ).to.equal( 2 )
    })
  })

  context( 'getTailNode()', () => {
    const linkedListOne = new LinkedList()

    it( 'in an empty list return null', () => {
      expect( linkedListOne.getTailNode() ).to.equal( null )
    })

    it( 'returns the tail of the list', () => {
      linkedListOne.insertFirst( 1 )
      linkedListOne.insertFirst( 2 )
      expect( linkedListOne.getTailNode().element ).to.equal( 1 )
    })
  })

  context( 'contains()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'success' )
    linkedListOne.insert( 'a bright future' )
    linkedListOne.insert( 'puppies' )

    it( 'should return false if item is not in list', () => {
      expect( linkedListOne.contains( 'failure' ) ).to.equal( false )
    })

    it( 'should return true if item is in list', () => {
      expect( linkedListOne.contains( 'puppies' ) ).to.equal( true )
    })
  })

  context( 'find()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'success' )
    linkedListOne.insert( 'a bright future' )
    linkedListOne.insert( 'puppies' )
    linkedListOne.insert( 'a bright future' )

    it( 'should return -1 if item is not in list', () => {
      expect( linkedListOne.find( 'failure' ) ).to.equal( -1 )
    })

    it( 'should return the first node containing yourself', () => {
      expect( linkedListOne.find( 'a bright future' ).element )
        .to.equal( 'a bright future' )
    })

    it( 'the node containing \'a bright future\' links to \'puppies\'', () => {
      expect( linkedListOne.find( 'a bright future' ).link.element )
        .to.equal( 'puppies' )
    })

  })

  context( 'insertBefore()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'anxiety' )
    linkedListOne.insert( 'success' )
    linkedListOne.insert( 'a bright future' )
    linkedListOne.insert( 'puppies' )
    linkedListOne.insert( 'a bright future' )

    it( 'insert node before first node in list matching first parameter', () => {
      linkedListOne.insertBefore( 'a bright future', 'failure' )
      expect( linkedListOne.contains( 'failure' )).to.equal( true )
    })

    it( 'inserted node should link to first parameter', () => {
      expect( linkedListOne.find( 'failure' ).link.element )
        .to.equal( 'a bright future' )
    })

    it( 'node prior to first parameter should link to inserted node', () => {
      expect( linkedListOne.find( 'success' ).link.element )
        .to.equal( 'failure' )
    })

  })

  context( 'insertAfter()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'anxiety' )
    linkedListOne.insert( 'success' )
    linkedListOne.insert( 'a bright future' )
    linkedListOne.insert( 'puppies' )
    linkedListOne.insert( 'a bright future' )

    it( 'insert node after first node in list matching first parameter', () => {
      linkedListOne.insertAfter( 'a bright future', 'failure' )
      expect( linkedListOne.contains( 'failure' )).to.equal( true )
    })

    it( 'inserted node should link to link of first node in list matching first parameter', () => {
      expect( linkedListOne.find( 'failure' ).link.element )
        .to.equal( 'puppies' )
    })

    it( 'node matching to first parameter should link to inserted node', () => {
      expect( linkedListOne.find( 'a bright future' ).link.element )
        .to.equal( 'failure' )
    })

  })

  context( 'isEmpty() as f**^%', () => {
    const linkedListOne = new LinkedList()

    it( 'is this list empty or WHAT?????', () => {
      expect( linkedListOne.isEmpty() ).to.equal( true )
    })

    it( 'there is no sh*! up in it or WHAT????', () => {
      linkedListOne.insert( 'some sh*!' )
      expect( linkedListOne.isEmpty() ).to.equal( false )
    })

  })

  context( 'size()', () => {
    const linkedListOne = new LinkedList()

    it( 'is this list empty or WHAT?????', () => {
      expect( linkedListOne.size() ).to.equal( 0 )
    })

    it( 'how big is this sh*!???', () => {
      linkedListOne.insert( 'some ACTUAL sh*!' )
      expect( linkedListOne.size() ).to.equal( 1 )
    })

  })

  context( 'remove()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'Socks' )
    linkedListOne.insert( 'Overwhelmed Grandma' )

    it( 'reduces size of list by 1', () => {
      linkedListOne.remove()
      expect( linkedListOne.size() ).to.equal( 1 )
    })

    it( 'removes the tail node from the list', () => {
      expect( linkedListOne.tail.data() ).to.equal( 'Socks' )
    })

    it( 'new tail node links to null', () => {
      expect( linkedListOne.tail.next() ).to.equal( null )
    })

  })

  context( 'removeFirst()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'Socks' )
    linkedListOne.insert( 'Overwhelmed Grandma' )
    linkedListOne.insert( 'Trustworthy Salesperson' )

    it( 'reduces size of list by 1', () => {
      linkedListOne.removeFirst()
      expect( linkedListOne.size() ).to.equal( 1 )
    })

    it( 'removes the head node from the list', () => {
      expect( linkedListOne.head.data() ).to.equal( 'Overwhelmed Grandma' )
    })

  })

  context( 'clear()', () => {
    const linkedListOne = new LinkedList()
    linkedListOne.insert( 'Socks' )
    linkedListOne.insert( 'Overwhelmed Grandma' )
    linkedListOne.insert( 'Trustworthy Salesperson' )

    it( 'sets size to 0', () => {
      linkedListOne.clear()
      expect( linkedListOne.size() ).to.equal( 0 )
    })

    it( 'sets head to null', () => {
      expect( linkedListOne.head ).to.equal( null )
    })

    it( 'sets tail to null', () => {
      expect( linkedListOne.tail ).to.equal( null )
    })

  })

})
