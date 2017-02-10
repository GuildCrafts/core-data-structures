import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doublyLinkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('bar')
        expect(myLList.getHeadNode()).to.be.an.instanceof(Node)
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('bar')
        myLList.insert('coo')
        expect(myLList.getTailNode()).to.be.an.instanceof(Node)
    })
  })

  context('contains()', () => {
    context('when the element is in the list', () => {
      it('returns true', () => {
          const myLList = new DoublyLinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.contains('foo')).to.equal(true)
      })
    })
    context('when the element is not in the list', () => {
      it('returns false', () => {
          const myLList = new DoublyLinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.contains('fo')).to.equal(false)
      })
    })
  })

  context('find()', () => {
    context('when the element is in the list', () => {
      it('returns the element', () => {
          const myLList = new DoublyLinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.find('foo')).to.be.an.instanceof(Node)
      })
    })
    context('when the element is not in the list', () => {
      it('returns -1', () => {
          const myLList = new DoublyLinkedList()

          myLList.insert('foo')
          myLList.insert('bar')
          expect(myLList.find('fo')).to.equal(-1)
      })
    })
  })

  context('insert()', () => {
    it('inserts node to the tail of the list', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        expect(myLList.contains('foo')).to.equal(true)
        expect(myLList.size()).to.equal(1)
    })
  })

  context('insertFirst()', () => {
    it('inserts node to the head of the list', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('bar')
        myLList.insertFirst('apples')
        expect(myLList.getHeadNode()._value).to.equal('apples')
    })
  })

  context('insertBefore("bananas", "apples")', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {
        const myLList = new DoublyLinkedList()



        myLList.insert('bananas')
        myLList.insert('foo')
        myLList.insertBefore('foo','apples')
        expect(myLList.contains('apples')).to.equal(true)
    })
  })

  context('insertAfter("apples", "bananas")', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('apples')
        myLList.insert('kiwi')
        myLList.insertAfter('apples','bananas')
        expect(myLList.contains('bananas')).to.equal(true)
    })
  })

  context('remove()', () => {
    it('Removes the tail node from the list', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('apples')
        myLList.insert('kiwi')
        myLList.remove()
        expect(myLList.getTailNode()._value).to.equal('apples')
    })
  })

  context('removeFirst()', () => {
    it('removes the head node from the list', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('apples')
        myLList.insert('kiwi')
        myLList.removeFirst()
        expect(myLList.getHeadNode()._value).to.equal('apples')
    })
  })

  context('isEmpty()', () => {
    context('when the list is not empty', () =>{
      it('returns false', () => {
          const myLList = new DoublyLinkedList()

          myLList.insert('foo')
          expect(myLList.isEmpty()).to.equal(false)
      })
    })

    context('when the list is empty', () =>{
      it('returns true', () => {
          const myLList = new DoublyLinkedList()

          expect(myLList.isEmpty()).to.equal(true)
      })
    })
  })

  context('size()', () => {
    it('returns the size of the list (number of nodes)', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('apples')
        myLList.insert('kiwi')
        expect(myLList.size()).to.equal(3)
    })
  })

  context('clear()', () => {
    it('clears the list of all nodes/data', () => {
        const myLList = new DoublyLinkedList()

        myLList.insert('foo')
        myLList.insert('apples')
        myLList.insert('kiwi')
        myLList.clear()
        expect(myLList.size()).to.equal(0)
    })
  })

})
