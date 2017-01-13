import {expect} from 'chai'
import chaiChange from 'chai-change'
import doublyLinkedList from '../src/doubleLinkedList'

describe('doublyLinkedList()', () => {
  context('Insert()', () => {
    it('it should insert into a newly doubly linked list', () => {
      const newList = new  doublyLinkedList()

      expect(newList.insert('element')).to.deep.equal({
        data: 'element', next: null, prev: null
      })
    })
    it('it should insert into a exisiting doubly linked list', () => {
      const newList = new  doublyLinkedList()
      newList.insert('element')
      console.log (newList)
      newList.insert('new-element')
      console.log (newList)

      expect(newList.insert('new-element2')).to.deep.equal(newList.head.data)


    })
  })

  // it('it should insert into a doubly linked list', () => {
  //   const newList = new doublyLinkedList()
  //
  //   newList.insert('element')
  //   newList.insert('new-element')
  //
  //   expect(newList.getHeadNode()).to.deep.equal({
  //     data: 'element', before: null, next: {data: 'new-element', before: , next: null}
  //   })
  // })

  // it('check the size of the linked list', () => {
  //   const newList = new LinkedList()
  //
  //   expect(newList.size()).to.deep.equal(0)
  //
  //   newList.insert('element')
  //   newList.insert('new-element')
  //
  //   expect(newList.size()).to.deep.equal(2)
  // })
  //
  // it('returns the last node', () => {
  //   const newList = new LinkedList()
  //
  //   newList.insert('element')
  //   newList.insert('new-element')
  //   newList.insert('another-new-element')
  //
  //   expect(newList.getTailNode()).to.deep.equal({data: 'another-new-element', next: null})
  //   })
  })
