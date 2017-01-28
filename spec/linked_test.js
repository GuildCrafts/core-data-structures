import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { linkedList, Node } from '../src/linkedList'


chai.use(chaiChange)

describe('linkedList', () => {

  it('exists', () => {
    expect(linkedList).to.be.a('function')
  })

  context( 'getNext()', () => {
    it ( 'exist', () => {
      const node = new Node('hi')
      expect ( node.getData() ).to.equal( 'hi' )
    })
  })

  context('getHeadNode()', () => {

    it('Returns the first node in the list 1', () => {
      const llist = new linkedList()
      console.log('llist', llist)
      expect( llist.getHeadNode()).to.eql( null )
    })
    it('Returns the first node in the list 2', () => {
      const llist = new linkedList()
      llist.insert('a')
      console.log('llist', llist)
      expect( llist.getHeadNode() ).to.eql( { data : 'a', nextNode : null} )
    })
    it('Returns the first node in the list 3', () => {
      const llist = new linkedList()
      llist.insert('a')
      llist.insert('b')
      console.log('llist', llist)
      expect( llist.getHeadNode() )
        .to.eql( { data : 'a', nextNode : {data : 'b', nextNode : null}} )
    })

    it('Returns the first node in the list 4', () => {
      const llist = new linkedList()
      llist.insert('a')
      llist.insert('b')
      llist.insert('c')
      console.log('llist', llist)
      expect( llist.getHeadNode() )
        .to.eql({ data : 'a', nextNode : {data : 'b', nextNode :{data : 'c', nextNode : null}}} )
    })
  })

  context('insertFirst()', () => {

    it('Inserts a node (with the provided data) to the head of the list', () => {
      const llist = new linkedList()
      llist.insertFirst('a')
      llist.insertFirst('b')
      llist.insertFirst('c')
      console.log('llist', llist)
      expect( llist.getHeadNode() )
        .to.eql({ data : 'c', nextNode : {data : 'b', nextNode :{data : 'a', nextNode : null}}} )
    })
  })

  context('insertBefore()', () => {

    it('Inserts a node (with data "ardvark") before the first node containing "cat"', () => {
      const llist = new linkedList()
      llist.insert('antlion')
      llist.insert('beaver')
      llist.insert('cat')
      llist.insert('gorilla')
      expect( llist.getHeadNode() )
        .to.eql({ data : 'antlion', nextNode : {data : 'beaver', nextNode :{data : 'cat', nextNode : {data : 'gorilla', nextNode : null}}}} )

      llist.insertBefore('ardvark', 'cat')

      expect( llist.getHeadNode() )
        .to.eql({ data : 'antlion', nextNode : {data : 'beaver', nextNode :{data : 'ardvark', nextNode : {data : 'cat', nextNode : {data : 'gorilla', nextNode : null}}}}} )
    })
  })

  context('insertAfter()', () => {

    it.only('Inserts a node (with data "ardvark") after the first node containing "cat"', () => {
      const llist = new linkedList()
      llist.insert('antlion')
      llist.insert('beaver')
      llist.insert('cat')
      llist.insert('gorilla')
      expect( llist.getHeadNode() )
        .to.eql({ data : 'antlion', nextNode : {data : 'beaver', nextNode :{data : 'cat', nextNode : {data : 'gorilla', nextNode : null}}}} )

      llist.insertAfter('ardvark', 'cat')

      expect( llist.getHeadNode() )
        .to.eql({ data : 'antlion', nextNode : {data : 'beaver', nextNode :{data : 'cat', nextNode : {data : 'ardvark', nextNode : {data : 'gorilla', nextNode : null}}}}} )
    })
  })

})
