import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
    'use strict'
    const list = new LinkedList()


    it('is a function', () => {
        expect(LinkedList).to.be.a('function')
    })

    context('insert()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'secondNode'} )
        const nodeC = new Node( {data: 'lastNode'} )
        it('inserts a node (with the provided data) to the tail of the list', () => {
            expect( list.insert() ).to.equal('firstNode')
        })
    })

    context('getHead()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        it('returns the first node in the list', () => {
            expect( list.getHead() ).to.equal(nodeA)
        })
    })

    context('getTail()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'secondNode'} )
        const nodeC = new Node( {data: 'lastNode'} )
        it('returns the last node in the list', () => {
            expect( list.getTail() ).to.equal(nodeC)
        })
    })

    context('contains()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'secondNode'} )
        const nodeC = new Node( {data: 'lastNode'} )
        it('determines whether or not the list contains the provided data', () => {
            expect( list.contains('') ).to.contain('firstNode')
        })
    })

    context('find()', () => {
        const node = new Node( {data: 'firstNode'} )
        it('returns the first node containing the provided data, or -1 if not found', () => {
            expect( list.find() ).to.equal('')
        })
    })

    context('insertFirst()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'secondNode'} )
        const nodeC = new Node( {data: 'lastNode'} )
        it('inserts a node (with the provided data) to the head of the list', () => {
            expect( list.insertFirst() ).to.equal('')
        })
    })

    context('insertBefore()', () => {
        const nodeA = new Node( {data: 'bananas'} )
        const nodeB = new Node( {data: 'apples'} )
        it('inserts a node (with data "apples") before the first node containing "bananas"', () => {
            expect( list.insertBefore() ).to.equal('')
        })
    })

    context('insertAfter()', () => {
        const nodeA = new Node( {data: 'apple'} )
        const nodeB = new Node( {data: 'bananas'} )
        it('inserts a node (with data "bananas") after the first node containing "apples"', () => {
            expect( list.insertAfter() ).to.equal('')
        })
    })

    context('remove()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'secondNode'} )
        const nodeC = new Node( {data: 'thirdNode'} )
        it('removes the tail node from the list', () => {
            expect( list.remove() ).to.equal(nodeC)
        })
    })

    context('removeFirst()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'secondNode'} )
        const nodeC = new Node( {data: 'thirdNode'} )
        it('removes the head node from the list', () => {
            expect( list.removeFirst() ).to.equal(nodeA)
        })
    })

    context('isEmpty()', () => {
        const node = new Node( {} )
        it('returns the first node in the list', () => {
            expect( nodeA.isEmpty() ).to.equal(undefined)
        })
    })

    context('size()', () => {
        const nodeA = new Node( {data: 'firstNode'} )
        const nodeB = new Node( {data: 'firstNode'} )
        const nodeC = new Node( {data: 'firstNode'} )
        it('returns the size of the list (number of nodes)', () => {
            expect( nodeA.size() ).to.equal(this.size)
        })
    })

    context('clear()', () => {
        const node = new Node( {data: 'firstNode'})
        it('clears the list of all nodes/data', () => {
            expect( list.size ).to.equal(0)
        })
    })

})
