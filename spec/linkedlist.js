import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedlist'

chai.use(chaiChange)

describe('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })

  describe('insertFirst', () => {

    it('Inserts a node with the provided data to the head of the list', () => {
      const aLinkedList = new LinkedList()

      expect(() => aLinkedList.insertFirst('foo'))
        .to.alter(() => aLinkedList.size(), { from: 0, to: 1 })
    })

    it('Inserts a node with the provided data to the head of the list', () => {
      const aLinkedList = new LinkedList()

      aLinkedList.insertFirst('bar')

      expect(() => aLinkedList[0]
        .to.equal('bar'))
    })
  })

  describe('insert()', () => {
    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const aLinkedList = new LinkedList()

      expect(() => aLinkedList.insert('stuff'))
        .to.alter(() => aLinkedList.size(), { from: 0, to: 1 })
    })

    it('Inserts a node (with the provided data) to the tail of the list', () => {
      const aLinkedList = new LinkedList()

      aLinkedList.insert('foo')
      aLinkedList.insert('stuff')
      aLinkedList.insert('blah')
      aLinkedList.insert('foo2')
      aLinkedList.insert('stuff2')


      expect(aLinkedList.tail.data)
        .to.equal('stuff2')
    })
  })

  describe('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const aLinkedList = new LinkedList()

      expect(() => aLinkedList.find('stuff'))
        .to.alter(() => aLinkedList.size(), { from: 0, to: 1 })
    })

    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const aLinkedList = new LinkedList()

      aLinkedList.insert('foo')
      aLinkedList.insert('stuff')
      aLinkedList.insert('blah')
      aLinkedList.insert('foo2')
      aLinkedList.insert('stuff2')



      expect(aLinkedList.tail.data)
        .to.equal('stuff2')
    })
  })

  // context('peek()', () => {
  //   it('shows the current element at the top of the stack.', () => {
  //     const aLinkedList = new LinkedList(['foo','bar'])
  //     expect(aLinkedList.peek())
  //       .to.equal('foo')
  //   })
  // })
  //
  // context ('isEmpty()', () => {
  //   it('shows the current stack is empty.', () => {
  //     const aLinkedList = new LinkedList()
  //     expect(aLinkedList.isEmpty())
  //       .to.equal(true)
  //   })
  //   it('returns false if the current stack is occupied.', () => {
  //     const aLinkedList = new LinkedList()
  //     aLinkedList.push('fewh')
  //     expect(aLinkedList.isEmpty())
  //       .to.equal(false)
  //   })
  // })
  //
  //
  // context ('length()', () => {
  //   it('shows the length of the stack.', () => {
  //     const aLinkedList = new LinkedList()
  //     aLinkedList.push('ber')
  //     expect(aLinkedList.length())
  //       .to.equal(1)
  //   })
  // })
})

// describe('linkedlist', () => {
//   'use strict'
//
//   it('exists', () => {
//     expect(LinkedList).to.be.a('function')
//   })
//
//   describe('insertFirst()', () => {
//     it('Inserts a node with the provided data to the head of the list'), () => {
//       const linkedList = new LinkedList()
//       linkedList.insertFirst("someData")
//       .to.alter(() => linkedList.size(), { from: 0, to: 1 })
//     })
//   })
//     it('Inserts a node with the provided data to the head of the list'), () => {
//       const linkedList = new LinkedList()
//       linkedList.insertFirst("someData2")
//       .to.alter(() => linkedList.size(), { from: 1, to: 2 })
//     })
//   })
//   describe('size()', () => {
//     it('returns the size of the list', () => {
//         const linkedList = new LinkedList()
//         linkedList.insertFirst("hello")
//         expect(linkedList.size()).to.eql(1)
//     })
//   })
