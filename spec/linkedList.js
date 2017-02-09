import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
        const myLList = new LinkedList()

        myLList.insert('foo')
        myLList.insert('bar')
        expect(myLList.getHeadNode()).to.equal('foo')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
        const myLList = new LinkedList()

        myLList.insert('foo')
        myLList.insert('bar')
        expect(myLList.getTailNode()).to.equal('bar')
    })
  })

  context('contains()', () => {
    context('when the element is in the list', () => {
      it('returns true', () => {
          const myLList = new LinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.contains('foo')).to.equal(true)
      })
    })
    context('when the element is not in the list', () => {
      it('returns false', () => {
          const myLList = new LinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.contains('fo')).to.equal(false)
      })
    })
  })
  context('find()', () => {
    context('when the element is in the list', () => {
      it('returns the element', () => {
          const myLList = new LinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.find('foo')).to.equal('foo')
      })
    })
    context('when the element is not in the list', () => {
      it('returns -1', () => {
          const myLList = new LinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.find('fo')).to.equal(-1)
      })
    })
  })

  context('insert()', () => {
    it('inserts node to the tail of the list', () => {
        const myLList = new LinkedList()

        myLList.insert('foo')
        expect(myLList.contains('foo')).to.equal(true)
        expect(myLList.size()).to.equal(1)
    })
  })

  context('insertFirst()', () => {
    it('inserts node to the head of the list', () => {
        const myLList = new LinkedList()

        myLList.insert('foo')
        myLList.insert('bar')
        myLList.insertFirst('apples')
        expect(myLList.getHeadNode()).to.equal('apples')
    })
  })

  context('insertBefore("bananas", "apples")', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
        const myLList = new LinkedList()

        myLList.insert('bananas')
        myLList.insert('foo')
        myLList.insertBefore('foo','apples')
        console.log("myLList", myLList)
        //expect(myLList.getHeadNode()).to.equal('apples')
    })
  })

  context('insertAfter("apples", "bananas")', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
        const myLList = new LinkedList()

        myLList.insert('foo')
        myLList.insert('apples')
        myLList.insertAfter('apples','bananas')
        expect(myLList.getTailNode()).to.equal('bananas')
    })
  })

})
