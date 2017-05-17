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



})
