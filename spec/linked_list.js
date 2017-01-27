import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linked_list'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  context( 'size()', () => {
    it( 'returns the size of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )
      expect( myLinkedList.size() ).to.deep.equal( 2 )
    })
  })

  context( 'clear()', () => {
    it( 'Clears the list of all nodes, data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )
      expect(() => myLinkedList.clear() )
        .to.alter(() => myLinkedList.size(), { from: 2, to: 0 })
      expect( myLinkedList.getTailNode() ).to.be.null
      expect( myLinkedList.getHeadNode() ).to.be.null
    })
  })

  context('insert()', () => {
    it('adds an element to the back of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )

      expect( myLinkedList.getHeadNode()._data ).to.deep.equal( 'bar' )
    })

    it('increments the size', ()=> {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )
      expect( myLinkedList.size() ).to.deep.equal( 2 )
    })
  })

  context('insertFirst()', () => {
    it('adds an element to the front of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )
      myLinkedList.insertFirst( 'me first!' )

      expect( myLinkedList.getTailNode()._data ).to.deep.equal( 'me first!' )
    })

    it('increments the size', ()=> {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )
      myLinkedList.insertFirst( 'me first!' )

      expect( myLinkedList.size() ).to.deep.equal( 3 )
    })
  })

  context('getTailNode()', () => {
    it('returns item at the front of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )

      expect( myLinkedList.getTailNode()._data ).to.deep.equal( 'a' )
    })

    it('returns null if called on an empty list', ()=> {
      const myLinkedList = new LinkedList()
      expect( myLinkedList.getTailNode() ).to.be.null
    })
  })

  context('getHeadNode()', () => {
    it('returns item at the back of the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )

      expect( myLinkedList.getHeadNode()._data ).to.deep.equal( 'd' )
    })

    it('returns null if called on an empty list', ()=> {
      const myLinkedList = new LinkedList()
      expect( myLinkedList.getHeadNode() ).to.be.null
    })
  })

  context('remove()', () => {
    it('returns and removes the last element', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )

      expect( myLinkedList.size() ).to.deep.equal( 4 )
      expect( myLinkedList.remove() ).to.deep.equal( 'd' )
      expect( myLinkedList.size() ).to.deep.equal( 3 )
      expect( myLinkedList.getHeadNode() ).to.not.deep.equal( 'd' )
    })
  })

  context('removeFirst()', () => {
    it('returns and removes the first element', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      expect( myLinkedList.size() ).to.deep.equal( 4 )
      expect( myLinkedList.removeFirst() ).to.deep.equal( 'a' )
      expect( myLinkedList.size() ).to.deep.equal( 3 )
      expect( myLinkedList.getTailNode() ).to.not.deep.equal( 'a' )
    })

    it('if list is empty, returns null', () => {
      const myLinkedList = new LinkedList()

      expect( myLinkedList.isEmpty() ).to.be.true
      expect( myLinkedList.removeFirst() ).to.be.null
    })
  })
  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      const myLinkedList = new LinkedList()
      expect( myLinkedList.isEmpty() ).to.be.true
    })

    it('returns false if the list contains items', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'foo' )
      myLinkedList.insert( 'bar' )
      expect( myLinkedList.isEmpty() ).to.be.false
    })
  })

  context('find()', () => {
    it('returns the first node containing the provided data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      expect( myLinkedList.find( 'c' )._data ).to.deep.equal( 'c' )
      expect( myLinkedList.find( 'c' )._next._data ).to.deep.equal( 'b' )
    })

    it('case: query == headNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      expect( myLinkedList.find( 'd' )._data ).to.deep.equal( 'd' )
      expect( myLinkedList.find( 'd' )._next._data ).to.deep.equal( 'c' )
    })

    it('case: single node in list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      expect( myLinkedList.find( 'a' )._data ).to.deep.equal( 'a' )
      expect( myLinkedList.getTailNode()._data ).to.deep.equal( 'a' )
    })

    it('returns -1 if provided data is not found', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      expect( myLinkedList.find( 'z' )).to.deep.equal( -1 )
    })
  })

  context('contains()', () => {
    it('returns true if provided data is in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      expect( myLinkedList.contains( 'c' )).to.be.true
    })

    it('case: contained in tailNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      expect( myLinkedList.contains( 'a' )).to.be.true
    })

    it('case: contained in headNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      expect( myLinkedList.contains( 'e' )).to.be.true
    })

    it('returns false if provided data is not in the list', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      expect( myLinkedList.contains( 'z' )).to.be.false
    })
  })

  context('insertBefore(query, newData)', () => {
    it('Inserts a node (with newData) before the first node containing query', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      myLinkedList.insert( 'f' )
      myLinkedList.insert( 'g' )
      expect(() => myLinkedList.insertBefore( 'd', 'c' ) )
        .to.alter(() => myLinkedList.size(), { from: 6, to: 7 })
      expect( myLinkedList.contains( 'c' )).to.be.true
      expect( myLinkedList.find( 'd' )._next._data).to.deep.equal( 'c' )
      expect( myLinkedList.find( 'c' )._next._data).to.deep.equal( 'b' )
    })

    it('Case: duplicate data', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      expect(() => myLinkedList.insertBefore( 'a', 'c' ) )
        .to.alter(() => myLinkedList.size(), { from: 4, to: 5 })
      expect( myLinkedList.contains( 'c' )).to.be.true
      expect( myLinkedList.find( 'a' )._next._data).to.deep.equal( 'c' )
      expect( myLinkedList.find( 'c' )._next._data).to.deep.equal( 'b' )
    })

    it('case: query == tailNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      myLinkedList.insert( 'f' )
      expect(() => myLinkedList.insertBefore( 'b', 'a' ) )
        .to.alter(() => myLinkedList.size(), { from: 5, to: 6 })
      expect( myLinkedList.contains( 'a' )).to.be.true
      expect( myLinkedList.find( 'b' )._next._data).to.deep.equal( 'a' )
      expect( myLinkedList.getTailNode( )._data).to.deep.equal( 'a' )
      expect( myLinkedList.find( 'a' )._next).to.be.null
    })

    it('case: query == headNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'f' )
      expect(() => myLinkedList.insertBefore( 'f', 'e' ) )
        .to.alter(() => myLinkedList.size(), { from: 5, to: 6 })
      expect( myLinkedList.contains( 'e' )).to.be.true
      expect( myLinkedList.find( 'f' )._next._data).to.deep.equal( 'e' )
      expect( myLinkedList.find( 'e' )._next._data).to.deep.equal( 'd' )
    })
  })

  context('insertAfter(query, newData)', () => {
    it('Inserts a node (with newData) after the first node containing query', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      myLinkedList.insert( 'f' )
      myLinkedList.insert( 'g' )
      expect(() => myLinkedList.insertAfter( 'b', 'c' ) )
        .to.alter(() => myLinkedList.size(), { from: 6, to: 7 })
      expect( myLinkedList.contains( 'c' )).to.be.true
      expect( myLinkedList.find( 'd' )._next._data).to.deep.equal( 'c' )
      expect( myLinkedList.find( 'c' )._next._data).to.deep.equal( 'b' )
    })

    it('case: query == tailNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      expect(() => myLinkedList.insertAfter( 'a', 'b' ) )
        .to.alter(() => myLinkedList.size(), { from: 4, to: 5 })
      expect( myLinkedList.contains( 'b' )).to.be.true
      expect( myLinkedList.find( 'b' )._next._data).to.deep.equal( 'a' )
      expect( myLinkedList.getTailNode( )._data).to.deep.equal( 'a' )
      expect( myLinkedList.find( 'a' )._next).to.be.null
    })

    it('case: query == headNode', () => {
      const myLinkedList = new LinkedList()
      myLinkedList.insert( 'a' )
      myLinkedList.insert( 'b' )
      myLinkedList.insert( 'c' )
      myLinkedList.insert( 'd' )
      myLinkedList.insert( 'e' )
      expect(() => myLinkedList.insertAfter( 'e', 'f' ) )
        .to.alter(() => myLinkedList.size(), { from: 5, to: 6 })
      expect( myLinkedList.contains( 'f' )).to.be.true
      expect( myLinkedList.find( 'f' )._next._data).to.deep.equal( 'e' )
      expect( myLinkedList.getHeadNode( )._data).to.deep.equal( 'f' )
    })
  })
})
