import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe.only('LinkedList', () => {
    'use strict'
    const list = new LinkedList()
    list.insert( {data: 'apple'} )
    list.insert( {data: 'banana'} )
    list.insert( {data: 'orange'} )

    it('is a function', () => {
        expect( LinkedList ).to.be.a( 'function' )
    })

    context( 'getHeadNode', () => {
        it( 'returns the first node in the list', () => {
            expect ( list.getHeadNode().data ).to.equal( 'apple' )
        })
    })

    context( 'getTailNode', () => {
        it( 'returns the lastnode in the list', () => {
            expect( list.getTailNode().data ).to.equal( 'orange')
        })
    })

    context( 'insert()', () => {
        it( 'inserts node to the tail', () => {
            list.insert( { data: 'papaya' } )
            expect( list.tail.data ).to.equal( 'papaya')
        })
    })

    context( 'contains()', () => {
        it( 'determines whether or not the list contains the provided data', () => {
            expect( list.contains( 'cherry' ) ).to.equal( false )
        })
    })

    context( 'find()', () => {
        it( 'returns the first node contains the prodived data', () => {
            expect( list.find( 'banana' ).getData() ).to.equal( 'banana' )
        })
        it( 'returns -1 if not found', () => {
            expect( list.find( 'cherry' ) ).to.equal(-1)
        })
    })

    context( 'insertFirst()', () => {
        it( 'inserts a node at the head of the list', () => {
            list.insertFirst( { data: 'bananas' } )
            expect( list.head.data ).to.equal( 'bananas')
        })
    })

    context( 'insertBefore', () => {
        it( 'inserts a node before a specified node', () => {
            list.insertBefore( 'bananas', 'apples' )
            expect( list.head.next.data ).to.equal( 'bananas' )
        })
    })

    context( 'insertfAter', () => {
        it( 'inserts a node after a specified node', () => {
            list.insertAfter( 'apples', 'guava' )
            expect( list.head.next.next.next.data ).to.equal( 'guava')
        })
    })

    context( 'remove()', () => {
        it( 'removes the tail node from the list', () => {
            list.remove()
            expect( list.length ).to.equal(5)
        })
    })

    context( 'removeFirst()', () => {
        it( 'removes the head node from the list' , () => {
            list.removeFirst()
            console.log(list)
            expect( list.head.data ).to.equal( 'bananas' )
        })
    })

    context( 'isEmpty()', () => {
        it( ' determines whether the list is empty', () => {
            expect( list.isEmpty() ).to.equal(false)
        })
    })

    context( 'size()', () => {
        it( 'returns the size of the list', () => {
            expect( list.size() ).to.equal(5)
        })
    })

    context( 'clear()', () => {
        it( ' clears the list of all nodes and data', () => {
            list.clear()
            expect( list.length ).to.equal(0)
        })
    })

})
