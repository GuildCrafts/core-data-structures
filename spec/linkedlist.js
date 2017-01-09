import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/linkedlist'

chai.use(chaiChange)

describe('LinkedList', () => {

'use strict'

    it('exists', () => {
        expect(LinkedList).to.be.a('function')

    })

    describe('insertFirst()', () => {
        it('Inserts a node (with the provided data) to the head of the list'), () => {
            const linkedList = new LinkedList()
            linkedList.insertFirst("someData")
            expect(LinkedList.size).to.be.equal(1)
        })
    })

    describe('getHeadNode()', () => {
        it('Returns the first node in the list', () => {
            const linkedList = new LinkedList()

            expect(() => LinkedList.getHeadNode()
                .to.equal(() => this.head
        })
    })
})
