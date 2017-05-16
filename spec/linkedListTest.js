import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
    'use strict'
    const linkedList = new LinkedList()


    it('is a function', () => {
        expect(LinkedList).to.be.a('function')
    })

    context('insert()', () => {
        const node = new Node( {data: 'firstNode'})
        it('inserts a node (with the provided data) to the tail of the list', () => {
            expect( linkedList.insert(node) ).data.to.equal('firstNode')
        })
    })

    context('getHeadNode()', () => {
        it('returns the first node in the list', () => {
            expect( linkedList.getHeadNode() ).to.equal('firstNode')
        })
    })

    context('getTailNode()', () => {
        it('returns the last node in the list', () => {
            expect( linkedList.getTailNode() ).to.equal(nodeB)
        })
    })

    context('contains()', () => {
        const node = new Node( {data: 'firstNode'})
        it('determines whether or not the list contains the provided data', () => {
            expect( linkedList.contains() ).to.contain('value')
        })
    })

    context('insert()', () => {
        const node = new Node( {data: 'firstNode'})
        it('inserts a node (with the provided data) to the tail of the list', () => {
            expect( linkedList.getTailNode() ).to.equal('')
        })
    })

    context('find()', () => {
        const node = new Node( {data: 'firstNode'})
        it('returns the first node containing the provided data, or -1 if not found', () => {
            expect( linkedList.insert() ).to.equal('')
        })
    })

    context('insertFirst()', () => {
        const node = new Node( {data: 'firstNode'})
        it('inserts a node (with the provided data) to the head of the list', () => {
            expect( linkedList.getHeadNode() ).to.equal('')
        })
    })

    context('insertBefore()', () => {
        const node = new Node( {data: 'firstNode'})
        it('inserts a node (with data "apples") before the first node containing "bananas"', () => {
            expect(linkedList.insertBefore() ).to.equal('')
        })
    })

    context('insertAfter()', () => {
        const node = new Node( {data: 'firstNode'})
        it('inserts a node (with data "bananas") after the first node containing "apples"', () => {
            expect( linkedList.insertAfter() ).to.equal('')
        })
    })

    context('remove()', () => {
        const node = new Node( {data: 'firstNode'})
        it('removes the tail node from the list', () => {
            expect( linkedList.remove() ).to.equal('')
        })
    })

    context('removeFirst()', () => {
        const node = new Node( {data: 'firstNode'})
        it('removes the head node from the list', () => {
            expect( linkedList.removeFirst() ).to.equal('')
        })
    })

    context('isEmpty()', () => {
        const node = new Node( {data: 'firstNode'})
        it('returns the first node in the list', () => {
            expect( nodeA.isEmpty() ).to.equal('')
        })
    })

    context('size()', () => {
        const node = new Node( {data: 'firstNode'})
        it('returns the size of the list (number of nodes)', () => {
            expect( nodeA.size() ).to.equal('')
        })
    })

    context('clear()', () => {
        const node = new Node( {data: 'firstNode'})
        it('clears the list of all nodes/data', () => {
            expect( nodeA.clear() ).to.equal('')
        })
    })

})
